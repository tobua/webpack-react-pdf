import 'regenerator-runtime'
import * as buffer from 'buffer'

window.Buffer = buffer.Buffer
global.Buffer = buffer.Buffer

window.process = {
  env: { DEBUG: undefined },
  nextTick: function () {
    return null
  },
}
