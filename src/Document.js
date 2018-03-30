import React, { Component } from 'react'
import { PDFRenderer, Document, createElement, pdf } from '@react-pdf/core'
import omit from 'lodash.omit'

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.container = createElement('ROOT')
    this.state = {
      url: '',
      document: undefined
    }
  }

  componentDidMount() {
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
          if (window.navigator.msSaveOrOpenBlob) {
            this.props.onUrl(() =>
              window.navigator.msSaveOrOpenBlob(blob, 'output.pdf')
            )
          } else {
            this.props.onUrl(url)
          }
        }
      })
  }

  componentDidUpdate() {
    PDFRenderer.updateContainer(
      <Document {...omit(['height', 'width', 'children'], this.props)}>
        {this.props.children}
      </Document>,
      this.mountNode,
      this
    )
  }

  componentWillUnmount() {
    PDFRenderer.updateContainer(null, this.mountNode, this)
  }

  onDownload() {
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(this.blob, 'document.pdf')
    }
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
