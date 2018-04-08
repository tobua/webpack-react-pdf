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
      title: 'React-PDF'
    }
  }

  handleTitle(title) {
    this.setState({
      title
    })
  }

  handleUrl(url) {
    this.url = url
  }

  handleOpen() {
    this.url()
  }

  render() {
    return (
      <div>
        <div className="center">
          <img src={logo} alt="webpack-react-pdf" />
        </div>
        <h1>webpack-react-pdf</h1>
        <label>Change the Title</label>
        <input onChange={event => this.handleTitle(event.target.value)} value={this.state.title} />
        <br/>
        <br/>
        <a style={{ cursor: 'pointer' }} onClick={() => this.handleOpen()}>
          <button>Open PDF</button>
        </a>
        <Document
          author="Matthias Giger"
          subject="react-pdf"
          name="document"
          width={'100%'}
          height={400}
          onUrl={url => this.handleUrl(url)}
        >
          <Page
            title={this.state.title}
          />
        </Document>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
