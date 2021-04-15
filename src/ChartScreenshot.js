import React from 'react'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  view: {
    display: 'flex',
  },
  image: {
    width: 'auto',
    height: 100,
  },
})

export const Screenshot = ({ chartImage }) => {
  if (!chartImage) {
    return null
  }

  return (
    <View style={styles.view}>
      <Text>Embedded Screenshot</Text>
      <Image style={styles.image} src={chartImage} />
    </View>
  )
}
