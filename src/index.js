import './polyfills.js'
import React, { useState } from 'react'
import { render } from 'react-dom'
import {
  PDFViewer,
  PDFDownloadLink,
  Font,
} from '@react-pdf/renderer/lib/react-pdf.browser.es'
import Page from './Page'
// import Container from './Container'
// import Chart from './charts/Charts'
import fonts from './fonts'
import logo from './logo.png'

fonts.map((font) => Font.register({ family: font.name, src: font.url }))

const App = () => {
  const [title, setTitle] = useState('React-PDF')
  const [chartImage, setChartImage] = useState(null)
  const [url, setUrl] = useState(null)

  return (
    <div>
      <div className="center">
        <img src={logo} alt="webpack-react-pdf" />
      </div>
      <h1>webpack-react-pdf</h1>
      <label>Change the Title</label>
      <input onChange={(event) => setTitle(event.target.value)} value={title} />
      <br />
      <br />
      <a
        href={typeof url === 'function' ? '' : url}
        onClick={() => {
          // Open PDF in IE11
          if (typeof url === 'function') {
            url()
          }
        }}
        download={'document.pdf'}
      >
        Download PDF
      </a>
      {/* <PDFDownloadLink document={}>Download PDF</PDFDownloadLink> */}
      <br />
      <br />
      {/* <Container
        width={'100%'}
        height={400}
        onUrl={setUrl}
        fonts={fonts}
        name="document"
      > */}
      <PDFViewer>
        <Page title={title} chartImage={chartImage} />
      </PDFViewer>
      <h2>DOM rendered Chart</h2>
      <p>A screenshot will be made and inserted into the PDF.</p>
      {/* <Chart svgFont="Arial" onScreenshot={setChartImage} /> */}
    </div>
  )
}

render(<App />, document.body)
