import regeneratorRuntime from 'regenerator-runtime'
import React, { Component } from 'react'
import ReactPDF, { Document, PDFRenderer, createInstance, pdf,
  Font } from '@react-pdf/renderer'
import BlobStream from 'blob-stream'
import queue from 'queue'
import omit from 'lodash.omit'
import deepEqual from 'deep-equal'

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.container = createInstance({ type: 'ROOT' });
    this.mountNode = PDFRenderer.createContainer(this.container)
    this.renderQueue = queue({
      autostart: true, // Directly start when pushing.
      concurrency: 1 // One concurrent job => run in series.
    })

    props.fonts.map(font => Font.register(font.url, { family: font.name }))

    // Without a queue, render would happen in parallel, accessing the same
    // stream, which will lead to "Error: stream.push() after EOF".
    this.renderQueue.push(() => this.renderPDF('mount'))
  }

  shouldComponentUpdate(nextProps) {
    // Children also contain the rendered notes, which change for every render.
    if (!deepEqual(this.props.children.props, nextProps.children.props)) {
      return true
    }

    return !deepEqual(
      omit(this.props, ['children']),
      omit(nextProps, ['children'])
    )
  }

  componentDidUpdate() {
    this.renderQueue.push(() => this.renderPDF('update'))
  }

  componentWillUnmount() {
    PDFRenderer.updateContainer(null, this.mountNode, null)
    this.frame.src = null
  }

  async renderPDF(trigger) {
    const { children } = this.props

    PDFRenderer.updateContainer(
      children,
      this.mountNode,
      null
    )

    await this.container.render()
    const stream = this.container.instance.pipe(BlobStream())

    stream.on('finish', () => {
      const blob = stream.toBlob('application/pdf')
      const url = window.URL.createObjectURL(blob)

      if (typeof this.props.onUrl === 'function') {
        // Open with IE11 legacy API
        if (window.navigator.msSaveOrOpenBlob) {
          return this.props.onUrl(() => {
            window.navigator.msSaveOrOpenBlob(blob, `${this.props.name}.pdf`)
          })
        }
        this.props.onUrl(url)
      }

      // Doing this through state would cause endless rerender.
      this.frame.src = url
    })
  }

  render() {
    const { width, height } = this.props

    return (
      <iframe
        ref={(frame) => (this.frame = frame)}
        style={{ width, height }}
      />
    )
  }
}

Container.defaultProps = {
  fonts: []
}
