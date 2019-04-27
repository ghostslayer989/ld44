// Module imports
import React from 'react'





// Local imports
import { isBrowser } from '../helpers'





class LD44 extends React.Component {
  componentDidMount () {
    if (isBrowser()) {
      /* eslint-disable global-require */
      const Phaser = require('phaser')
      /* eslint-enable */

      const { Game, WEBGL } = Phaser

      this.game = new Game({
        canvas: this.canvas.current,
        type: WEBGL,
        height: window.innerHeight,
        width: window.innerWidth,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 },
          },
        },
        scene: {
          create: () => {},
          preload: () => {},
        },
      })
    }
  }

  constructor (props) {
    super(props)
    this.canvas = React.createRef()
  }

  render () {
    return (
      <div>
        {/* eslint-disable jsx-a11y/control-has-associated-label */}
        <canvas ref={this.canvas} />
        {/* eslint-enable */}
      </div>
    )
  }
}





export default LD44
