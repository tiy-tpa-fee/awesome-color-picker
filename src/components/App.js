import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 50) + 50,
    lightness: Math.floor(Math.random() * 25) + 50,
    alpha: 1
  }

  _change = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const color = `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
    return (
      <main>
        <h1>A Color Picker</h1>
        <div className='color-well'>
          <figure style={{ backgroundColor: color }}>
            <figcaption>
              {color}
            </figcaption>
          </figure>
        </div>
        <ul className='sliders'>
          <li>
            <label>Hue</label>
            <input
              type='range'
              name='hue'
              min='0'
              max='360'
              onInput={this._change}
              onChange={this._change}
              value={this.state.hue}
            />
          </li>
          <li>
            <label>Saturation</label>
            <input
              type='range'
              name='saturation'
              onInput={this._change}
              onChange={this._change}
              value={this.state.saturation}
            />
          </li>
          <li>
            <label>Lightness</label>
            <input
              type='range'
              name='lightness'
              onInput={this._change}
              onChange={this._change}
              value={this.state.lightness}
            />
          </li>
          <li>
            <label>Alpha</label>
            <input
              type='range'
              name='alpha'
              min='0'
              max='1'
              step='0.01'
              onInput={this._change}
              onChange={this._change}
              value={this.state.alpha}
            />
          </li>
        </ul>
      </main>
    )
  }
}

export default App
