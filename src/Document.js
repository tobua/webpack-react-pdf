import React, { Component } from 'react'
import {
  PDFRenderer,
  Document,
  createElement,
  pdf,
  Font
} from '@react-pdf/core'
import omit from 'lodash.omit'
import equal from 'deep-equal'

export default class Container extends Component {
  constructor(props) {
    super(props)

    props.fonts.map(font => Font.register(font.url, { family: font.name }))
  }

  async componentDidMount() {
    this.renderPDF()

    this.props.fonts.map(
      async font => await Font.load(font.name, this.document.root)
    )
  }

  shouldComponentUpdate(nextProps) {
    if (!equal(this.props.children.props, nextProps.children.props)) {
      return true
    }

    return !equal(
      ...omit(this.props, ['children']),
      ...omit(nextProps, ['children'])
    )
  }

  componentDidUpdate() {
    this.renderPDF()
  }

  componentWillUnmount() {
    PDFRenderer.updateContainer(null, this.mountNode, this)
  }

  renderPDF() {
    this.container = createElement('ROOT')
    this.mountNode = PDFRenderer.createContainer(this.container)

    PDFRenderer.updateContainer(
      <Document
        ref={document => (this.document = document)}
        {...omit(this.props, ['height', 'width', 'children'])}
      >
        {this.props.children}
      </Document>,
      this.mountNode,
      this
    )

    pdf(this.container)
      .toBlob()
      .then(blob => {
        const url = window.URL.createObjectURL(blob)

        this.blob = blob
        this.embed.src = url

        if (typeof this.props.onUrl === 'function') {
          // Open with IE11 legacy API
          if (window.navigator.msSaveOrOpenBlob) {
            return this.props.onUrl(() => {
              window.navigator.msSaveOrOpenBlob(blob, `${this.props.name}.pdf`)
            })
          }
          this.props.onUrl(url)
        }
      })
  }

  render() {
    const { width, height } = this.props

    return (
      <iframe
        ref={container => {
          this.embed = container
        }}
        style={{ width, height }}
      />
    )
  }
}

Container.defaultProps = {
  fonts: []
}
