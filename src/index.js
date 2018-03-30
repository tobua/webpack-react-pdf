import 'regenerator-runtime/runtime'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'
import Document from './Document'
import logo from './logo.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: ''
    }
  }

  handleUrl(url) {
    this.setState({
      url
    })
  }

  handleOpen() {
    // Open url in IE11
    if (typeof this.state.url === 'function') {
      this.state.url()
    }
  }

  render() {
    return (
      <div>
        <div class="center">
          <img src={logo} alt="webpack-react-pdf" />
        </div>
        <h1>webpack-react-pdf</h1>
        <a href={this.state.url} onClick={() => this.handleOpen()}>
          <button>Open PDF</button>
        </a>
        <p>URL to BLOB: {this.state.url}</p>
        <Document
          title="React-PDF"
          author="Matthias Giger"
          subject="react-pdf"
          width={'100%'}
          height={400}
          onUrl={url => this.handleUrl(url)}
        >
          <Page />
        </Document>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
