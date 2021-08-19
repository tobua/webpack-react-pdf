import React from 'react'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  table: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    flexGrow: 1,
    paddingTop: 12,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#000000',
  },
  cell: {
    flexGrow: 1,
    paddingTop: 12,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
})

export const Table = () => (
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
)
