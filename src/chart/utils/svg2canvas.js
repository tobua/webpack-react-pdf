import canvg from 'canvg'

// For IE11 render SVG to canvas before screenshotting.
// Replaces SVG node with canvas with the SVG rendered inside.
export default (nodes) => {
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode

  if (!isIE11) {
    return
  }

  Array.prototype.forEach.call(nodes,
    (node) => {
      // Create canvas element.
      const svgCanvas = document.createElement('canvas')
      // Render SVG contents into new canvas.
      canvg(svgCanvas, node.parentNode.innerHTML)
      // Replace node with newly created canvas.
      node.parentNode.replaceChild(svgCanvas, node)
    }
  )
}
