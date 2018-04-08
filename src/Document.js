import React, { Component } from 'react'
import { PDFRenderer, Document, createElement, pdf } from '@react-pdf/core'
import omit from 'lodash.omit'

export default class Container extends Component {
  componentDidMount() {
    this.renderPDF()
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
      <Document {...omit(['height', 'width', 'children'], this.props)}>
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
          this.props.onUrl(() => {
            // Open with IE11 legacy API
            if (window.navigator.msSaveOrOpenBlob) {
                return window.navigator.msSaveOrOpenBlob(blob, `${this.props.name}.pdf`)
            }

            window.location.href = url
          })
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
