import React, { useState, useRef, useEffect } from 'react'
import html2canvas from 'html2canvas'
import { Input, Button, Grid } from 'exmpl'
import { Rechart } from '/chart/Rechart'

const takeScreenshot = async (onScreenshot, chart) => {
  const { scrollX, scrollY } = window

  // Screenshot will be cut by scrollY if not on top.
  window.scrollTo(0, 0)

  const canvas = await html2canvas(chart, {
    logging: false,
    // Required for Arial to be used in Safari.
    onclone: (doc) => {
      const svgs = doc.querySelectorAll('svg')
      svgs.forEach((svg) => (svg.style.fontFamily = 'Arial'))
    },
  })

  // Reset scroll position after taking screenshot.
  window.scrollTo(scrollX, scrollY)

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
      <Input
        style={{ marginRight: 20 }}
        placeholder="Dynamic Value"
        value={value}
        onValue={(value) => setValue(value)}
      />
      <Button onClick={() => takeScreenshot(onScreenshot, chart.current)}>
        Update Screenshot
      </Button>
      <Grid>
        <div>
          <h3>Chart</h3>
          <div ref={chart}>
            <Rechart value={value} />
          </div>
        </div>
        <div>
          <h3>Screenshot Image</h3>
          {screenshot && <img alt="Screenshot" width="100%" src={screenshot} />}
        </div>
      </Grid>
    </div>
  )
}
