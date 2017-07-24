const well = document.querySelector('.color-well figure')
const caption = document.querySelector('.color-well figcaption')
const inputs = document.querySelectorAll('input[type=range]')

const color = {
  hue: Math.floor(Math.random() * 360),
  saturation: Math.floor(Math.random() * 50) + 50,
  lightness: Math.floor(Math.random() * 25) + 50,
  alpha: 1
}

const handleChange = event => {
  color[event.target.name] = event.target.value
  updateColor()
}

const updateColor = () => {
  const hslValue = `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, ${color.alpha})`
  well.style.backgroundColor = hslValue
  caption.textContent = hslValue
}

// Init

inputs.forEach(input => {
  input.addEventListener('input', handleChange)
  input.value = color[input.name]
})

updateColor()
