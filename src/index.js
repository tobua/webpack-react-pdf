import './polyfills.js'
import React, { useState } from 'react'
import { render } from 'react-dom'
import {
  PDFViewer,
  PDFDownloadLink,
  Font,
} from '@react-pdf/renderer/lib/react-pdf.browser.es'
import { Exmpl } from 'exmpl'
import { Document } from './pdf/Document'
import { Chart } from './chart/Chart'
import fonts from './fonts'

// Register asynchronous loaded fronts before rendering anything.
fonts.map((font) => Font.register({ family: font.name, src: font.url }))

const App = () => {
  const [title, setTitle] = useState('React-PDF')
  const [screenshot, setScreenshot] = useState(null)

  const page = <Document title={title} screenshot={screenshot} />

  return (
    <Exmpl
      title="webpack-react-pdf"
      github="https://tobua.github.io/webpack-react-pdf"
      npm="@react-pdf/renderer"
    >
      <label htmlFor="title" style={{ fontSize: 10 }}>
        Change the Title
      </label>
      <br />
      <input
        id="title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <br />
      <br />
      <PDFViewer width="100%" height="500">
        {page}
      </PDFViewer>
      {/* <PDFDownloadLink document={page} fileName="test.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink> */}
      <Chart screenshot={screenshot} onScreenshot={setScreenshot} />
    </Exmpl>
  )
}

render(<App />, document.body)
