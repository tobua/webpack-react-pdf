import React from 'react'
import { Page, Text, View, Image, StyleSheet } from '@react-pdf/core'
import logo from './logo.png'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter UI',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    fontSize: 20
  },
  heading: {
    fontFamily: 'Alice',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    backgroundColor: '#E4E4E4'
  },
  headings: {
    flexGrow: 1,
    flexDirection: 'column'
  },
  title: {
    marginBottom: 10,
    fontSize: 30
  },
  description: {
    fontFamily: 'Roboto',
    padding: 10
  },
  image: {
    width: 186,
    height: 100
  },
  table: {
    padding: 10,
    flexDirection: 'column',
    flexGrow: 1
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    flexGrow: 1,
    paddingTop: 12,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#000000'
  },
  cell: {
    flexGrow: 1,
    paddingTop: 12,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0'
  },
  footer: {
    fontSize: 12,
    margin: 10,
    padding: 10,
    backgroundColor: '#E4E4E4'
  },
  fonts: {
    padding: 10
  },
  font: {
    small: {
      paddingBottom: 5,
      fontFamily: 'Helvetica',
      fontSize: 10
    },
    helvetica: {
      paddingBottom: 10,
      fontFamily: 'Helvetica'
    },
    alice: {
      fontFamily: 'Alice'
    },
    inter: {
      fontFamily: 'Inter UI'
    },
    roboto: {
      fontFamily: 'Roboto'
    }
  }
})

export default ({ title }) => {
  const host = window.location.hostname
  const protocol = window.location.protocol
  const port = window.location.port
  const urlLogo = `${protocol}//${host}:${port}/${logo}`

  return (
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.heading}>
        <View style={styles.headings}>
          <Text style={styles.title}>{title}</Text>
          <Text>Client Side PDF Generation with React</Text>
        </View>
        <Image style={styles.image} src={urlLogo} />
      </View>
      <View style={styles.description}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <View style={styles.header}>
            <Text>Header 1</Text>
          </View>
          <View style={styles.header}>
            <Text>Header 2</Text>
          </View>
          <View style={styles.header}>
            <Text>Header 3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>Cell 1</Text>
          </View>
          <View style={styles.cell}>
            <Text>Cell 2</Text>
          </View>
          <View style={styles.cell}>
            <Text>Cell 3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>Cell 1</Text>
          </View>
          <View style={styles.cell}>
            <Text>Cell 2</Text>
          </View>
          <View style={styles.cell}>
            <Text>Cell 3</Text>
          </View>
        </View>
      </View>
      <View style={styles.fonts}>
        <Text style={styles.font.small}>Embedded Font:</Text>
        <Text style={styles.font.helvetica}>Helvetica</Text>
        <Text style={styles.font.small}>Dynamically Loaded Fonts:</Text>
        <Text style={styles.font.alice}>Alice</Text>
        <Text style={styles.font.inter}>Inter UI</Text>
        <Text style={styles.font.roboto}>Roboto</Text>
      </View>
      <View style={styles.footer}>
        <Text>License: MIT</Text>
        <Text>GitHub: naminho/webpack-react-pdf</Text>
        <Text>Author: Matthias Giger</Text>
      </View>
    </Page>
  )
}
