import React, { useState, useRef, useEffect } from 'react'
import html2canvas from 'html2canvas'
import svg2canvas from './utils/svg2canvas'
import { Rechart } from './Rechart'

const takeScreenshot = async (onScreenshot, chart) => {
  const canvasWithFont = document.createElement('canvas')
  canvasWithFont.font = 'Arial'

  svg2canvas(chart.querySelectorAll('svg'))

  const canvas = await html2canvas(chart, {
    canvas: canvasWithFont,
    removeContainer: false,
    logging: false,
    // Required for Arial to be used in Safari.
    onclone: (doc) => {
      const svgs = doc.querySelectorAll('svg')
      svgs.forEach((svg) => (svg.style.fontFamily = 'Arial'))
    },
  })

  onScreenshot(canvas.toDataURL('image/png'))
}

export const Chart = ({ screenshot, onScreenshot }) => {
  const [value, setValue] = useState(5)
  const chart = useRef()

  useEffect(() => {
    if (!screenshot) {
      takeScreenshot(onScreenshot, chart.current)
    }
  })

  return (
    <div>
      <h2>Screenshot</h2>
      <p>
        A screenshot of the following DOM rendered chart will be made and
        inserted into the PDF above. Configure the chart value and update the
        screenshot.
      </p>
      <label htmlFor="value" style={{ fontSize: 10 }}>
        Dynamic Value
      </label>
      <br />
      <input
        id="value"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button
        style={{ marginLeft: 20 }}
        onClick={() => takeScreenshot(onScreenshot, chart.current)}
      >
        Update Screenshot
      </button>
      <h3>Chart</h3>
      <div ref={chart}>
        <Rechart value={value} />
      </div>
      <h3>Screenshot Image</h3>
      {screenshot && <img alt="Screenshot" src={screenshot} />}
    </div>
  )
}
