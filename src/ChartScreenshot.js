import React from 'react'
import { View, Image, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  view: {
    display: 'flex'
  },
  image: {
    width: 'auto',
    height: 100
  }
})

export default ({ chartImage }) => {
  if (!chartImage) {
    return null
  }

  return (
    <View style={styles.view}>
      <Image style={styles.image} src={chartImage} />
    </View>
  )
}
