import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import svg2canvas from './utils/svg2canvas'
import RechartsChart from './RechartsChart'
import ReactVisChart from './ReactVisChart'

export default class Chart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chartValue: 5
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.chartValue !== nextState.chartValue
  }

  handleScreenshot() {
    const { onScreenshot, svgFont } = this.props

    const canvasWithFont = document.createElement('canvas')
    canvasWithFont.font = 'Arial'

    svg2canvas(document.querySelectorAll('.chart svg'))

    html2canvas(this.chart, {
      canvas: canvasWithFont,
      removeContainer: false,
      logging: false,
      onclone: (doc) => {
        if (svgFont) {
          const svgs = doc.querySelectorAll('svg')
          Array.prototype.forEach.call(svgs,
            (svg) => (svg.style.fontFamily = svgFont))
        }
      }
    }).then((canvas) => {
      const imageData = canvas.toDataURL('image/png')
      this.chartImage.src = imageData

      onScreenshot(imageData)
    })
  }

  componentDidMount() {
    this.chart = document.getElementById('chart')
    this.chartImage = document.getElementById('chart-image')

    this.handleScreenshot()
  }

  handleChartValue(chartValue) {
    this.setState({
      chartValue
    })
  }

  render() {
    const { chartValue } = this.state

    return (
      <div>
        <label>Dynamic Value</label>
        <input
          onChange={event => this.handleChartValue(event.target.value)}
          value={chartValue}
        />
        <br />
        <br />
        <h3>Chart</h3>
        <br />
        <div id="chart">
          <a href="https://github.com/recharts/recharts">Recharts</a>
          <div className="chart">
            <RechartsChart chartValue={chartValue} />
          </div>
          <div id="between"></div>
          <a href="https://github.com/uber/react-vis">react-vis</a>
          <div className="chart">
            <ReactVisChart chartValue={chartValue} />
          </div>
        </div>
        <b>Screenshot</b>
        <br />
        <br />
        <button onClick={() => this.handleScreenshot()}>Update Screenshot</button>
        <br />
        <img id="chart-image" />
      </div>
    )
  }
}
