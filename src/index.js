import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'
import Container from './Container'
import Chart from './charts/Charts'
import fonts from './fonts'
import logo from './logo.png'

class App extends Component {
  constructor(props) {
    super(props)

    this._handleUrl = (url) => this.handleUrl(url)
    this._handleTitle = event => this.handleTitle(event.target.value)
    this._handleOpen = () => this.handleOpen()

    this.state = {
      title: 'React-PDF',
      chartImage: undefined,
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
    const { title, chartImage, url } = this.state

    return (
      <div>
        <div className="center">
          <img src={logo} alt="webpack-react-pdf" />
        </div>
        <h1>webpack-react-pdf</h1>
        <label>Change the Title</label>
        <input
          onChange={this._handleTitle}
          value={title}
        />
        <br />
        <br />
        <a
          href={typeof url === 'function' ? '' : url}
          onClick={this._handleOpen}
          download={'document.pdf'}
        >
          Download PDF
        </a>
        <br />
        <br />
        <Container
          width={'100%'}
          height={400}
          onUrl={this._handleUrl}
          fonts={fonts}
          name="document"
        >
          <Page
            title={title}
            chartImage={chartImage}
          />
        </Container>
        <h2>DOM rendered Chart</h2>
        <p>A screenshot will be made and inserted into the PDF.</p>
        <Chart
          svgFont="Arial"
          onScreenshot={(image) => {
            this.setState({
              chartImage: image
            })
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
