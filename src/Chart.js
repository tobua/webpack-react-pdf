import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts'
import html2canvas from 'html2canvas'

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
    const { onScreenshot } = this.props

    html2canvas(this.chart, {
      removeContainer: true,
      logging: false
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
    const data = [
      { value: 4 },
      { value: 2 },
      { value: 5 },
      { value: 1 },
      { value: chartValue }
    ]

    return (
      <div>
        <label>Dynamic Value</label>
        <input
          onChange={event => this.handleChartValue(event.target.value)}
          value={chartValue}
        />
        <br />
        <br />
        <b>Chart</b>
        <br />
        <div id="chart">
          <LineChart width={400} height={400} data={data}>
            <XAxis />
            <YAxis />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
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
