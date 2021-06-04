import React from 'react'
import {
  Document as PDFDocument,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer'
import { Screenshot } from './Screenshot'
import { Table } from './Table'
import logo from './../../logo.png'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter UI',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    fontSize: 20,
    padding: 10,
  },
  heading: {
    fontFamily: 'Alice',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#E4E4E4',
  },
  headings: {
    flexShrink: 1,
    marginRight: 10,
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 320,
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
  },
  subtitle: {
    color: '#1e72b3',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 22,
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  image: {
    width: 186,
    height: 100,
  },
  footer: {
    fontSize: 12,
    padding: 10,
    backgroundColor: '#E4E4E4',
  },
  fonts: {
    marginBottom: 10,
  },
  font: {
    small: {
      paddingBottom: 5,
      fontFamily: 'Helvetica',
      fontSize: 10,
    },
    helvetica: {
      paddingBottom: 10,
      fontFamily: 'Helvetica',
    },
    alice: {
      fontFamily: 'Alice',
    },
    inter: {
      fontFamily: 'Inter UI',
    },
    roboto: {
      fontFamily: 'Roboto',
    },
  },
})

export const Document = ({ title, screenshot }) => (
  <PDFDocument
    title="React-PDF Document"
    author="Matthias Giger"
    subject="This was generated with @react-pdf/renderer."
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.heading}>
        <View style={styles.headings}>
          <Text style={styles.title}>{title}</Text>
          <Text>
            Client Side PDF Generation with @react-pdf/renderer using React
          </Text>
        </View>
        <Image style={styles.image} src={logo} />
      </View>
      <View style={styles.description}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>
      <Text style={styles.subtitle}>Table</Text>
      <Table />
      <Text style={styles.subtitle}>Dynamically Loaded Screenshot</Text>
      <Screenshot image={screenshot} />
      <View style={styles.fonts}>
        <Text style={styles.subtitle}>Embedded Font</Text>
        <Text style={styles.font.helvetica}>Helvetica</Text>
        <Text style={styles.subtitle}>Dynamically Loaded Fonts</Text>
        <Text style={styles.font.alice}>Alice</Text>
        <Text style={styles.font.inter}>Inter UI</Text>
        <Text style={styles.font.roboto}>Roboto</Text>
      </View>
      <View style={styles.footer}>
        <Text>License: MIT</Text>
        <Text>GitHub: tobua/webpack-react-pdf</Text>
        <Text>Author: Matthias Giger</Text>
      </View>
    </Page>
  </PDFDocument>
)
