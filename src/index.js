import 'regenerator-runtime/runtime'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'
import Document from './Document'
import logo from './logo.png'
import getUrl from './get-url'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'React-PDF',
      url: undefined
    }
  }

  handleTitle(title) {
    this.setState({
      title
    })
  }

  handleUrl(url) {
    this.setState({
      url
    })
  }

  handleOpen() {
    // Open PDF in IE11
    if (typeof this.state.url === 'function') {
      this.state.url()
    }
  }

  render() {
    return (
      <div>
        <div className="center">
          <img src={logo} alt="webpack-react-pdf" />
        </div>
        <h1>webpack-react-pdf</h1>
        <label>Change the Title</label>
        <input
          onChange={event => this.handleTitle(event.target.value)}
          value={this.state.title}
        />
        <br />
        <br />
        <a
          href={this.state.url}
          onClick={() => this.handleOpen()}
          download={'document.pdf'}
        >
          Download PDF
        </a>
        <br />
        <br />
        <Document
          title="React PDF Document"
          author="Matthias Giger"
          subject="This was generated with React-PDF"
          name="document"
          width={'100%'}
          height={400}
          onUrl={this.handleUrl.bind(this)}
          fonts={[
            {
              url: getUrl('fonts/Alice-Regular.ttf'),
              name: 'Alice'
            },
            {
              url: getUrl('/fonts/Inter-UI-Regular.ttf'),
              name: 'Inter UI'
            },
            {
              url: getUrl('/fonts/Roboto-Regular.ttf'),
              name: 'Roboto'
            }
          ]}
        >
          <Page title={this.state.title} />
        </Document>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
