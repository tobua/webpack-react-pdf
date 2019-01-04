import React, { Component } from 'react'
import html2canvas from 'html2canvas'
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

    html2canvas(this.chart, {
      canvas: canvasWithFont,
      removeContainer: false,
      logging: false,
      onclone: (doc) => {
        if (svgFont) {
          const svgs = doc.querySelectorAll('svg')
          svgs.forEach(svg => (svg.style.fontFamily = svgFont))
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
          <RechartsChart chartValue={chartValue} />
          <a href="https://github.com/uber/react-vis">react-vis</a>
          <ReactVisChart chartValue={chartValue} />
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
