import './polyfills.js'
import React, { useState } from 'react'
import { render } from 'react-dom'
import {
  PDFViewer,
  PDFDownloadLink,
  Font,
} from '@react-pdf/renderer/lib/react-pdf.browser.es'
import { Exmpl, Input, Tabs } from 'exmpl'
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
      <Tabs labels={['Viewer', 'Download']}>
        <PDFViewer width="100%" height="500">
          {page}
        </PDFViewer>
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
      </Tabs>
      <p style={{ fontSize: 10 }}>
        Note: Choose between PDFViewer and PDFDownloadLink as rendering both
        will throw an error currently.
      </p>
      <Chart screenshot={screenshot} onScreenshot={setScreenshot} />
    </Exmpl>
  )
}

render(<App />, document.body)
