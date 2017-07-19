const hueSlider = document.querySelector('input[name=hue]')
const saturationSlider = document.querySelector('input[name=saturation]')
const lightnessSlider = document.querySelector('input[name=lightness]')
const alphaSlider = document.querySelector('input[name=alpha]')
const well = document.querySelector('.color-well figure')
const caption = document.querySelector('.color-well figcaption')

const color = {
  hue: 0,
  saturation: 0,
  lightness: 0,
  alpha: 0
}

const handleChange = event => {
  color[event.target.name] = event.target.value
  updateColor()
}

hueSlider.addEventListener('input', handleChange)
saturationSlider.addEventListener('input', handleChange)
lightnessSlider.addEventListener('input', handleChange)
alphaSlider.addEventListener('input', handleChange)

const updateColor = () => {
  const hslValue = `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, ${color.alpha})`
  well.style.backgroundColor = hslValue
  caption.textContent = hslValue
}

const init = () => {
  color.hue = Math.floor(Math.random() * 360)
  color.saturation = Math.floor(Math.random() * 50) + 50
  color.lightness = Math.floor(Math.random() * 25) + 50
  color.alpha = 1
  hueSlider.value = color.hue
  saturationSlider.value = color.saturation
  lightnessSlider.value = color.lightness
  alphaSlider.value = color.alpha
  updateColor()
}

init()
