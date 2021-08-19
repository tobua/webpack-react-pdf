import '/polyfills.js'
import React, { useState } from 'react'
import { render } from 'react-dom'
import { PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer'
import { Exmpl, Input, Tabs } from 'exmpl'
import { Document } from '/pdf/Document'
import { Chart } from '/chart/Chart'
import fonts from '/fonts'

// Register asynchronous loaded fronts before rendering anything.
fonts.map((font) => Font.register({ family: font.name, src: font.url }))

const App = () => {
  const [title, setTitle] = useState('React-PDF')
  const [screenshot, setScreenshot] = useState(null)

  const page = <Document title={title} screenshot={screenshot} />

  return (
    <Exmpl
      title="webpack-react-pdf"
      github="tobua/webpack-react-pdf"
      npm="@react-pdf/renderer"
    >
      <Input
        placeholder="Change the Title"
        value={title}
        onValue={(title) => setTitle(title)}
      />
      <br />
      <br />
      <PDFViewer width="100%" height="500">
        {page}
      </PDFViewer>
      <br />
      <br />
      <PDFDownloadLink
        document={page}
        fileName="browser-generated.pdf"
        style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}
      >
        {({ loading, error }) =>
          loading
            ? 'Loading document...'
            : error
            ? 'Error generating PDF'
            : 'Download now!'
        }
      </PDFDownloadLink>
      <p style={{ fontSize: 10 }}>
        Note: Render PDFViewer before PDFDownloadLink, as the other way around
        it currently fails.
      </p>
      <Chart screenshot={screenshot} onScreenshot={setScreenshot} />
    </Exmpl>
  )
}

render(<App />, document.body)
