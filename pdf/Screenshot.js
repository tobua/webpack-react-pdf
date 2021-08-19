import React from 'react'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  view: {
    display: 'flex',
  },
  image: {
    height: 120,
    width: 120,
  },
})

export const Screenshot = ({ image }) => {
  if (!image) {
    return null
  }

  return <Image style={styles.image} src={image} />
}
