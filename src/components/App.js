import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <main>
        <h1>A Color Picker</h1>
        <div className='color-well'>
          <figure>
            <figcaption>hsl(0, 0, 0)</figcaption>
          </figure>
        </div>
        <ul className='sliders'>
          <li>
            <label>Hue</label>
            <input type='range' name='hue' min='0' max='360' />
          </li>
          <li>
            <label>Saturation</label>
            <input type='range' name='saturation' />
          </li>
          <li>
            <label>Lightness</label>
            <input type='range' name='lightness' />
          </li>
          <li>
            <label>Alpha</label>
            <input type='range' name='alpha' min='0' max='1' step='0.01' />
          </li>
        </ul>
      </main>
    )
  }
}

export default App
