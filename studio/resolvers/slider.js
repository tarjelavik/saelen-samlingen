import Slider from '../components/slider/Slider'

export default function resolveInput(type) {
  if (type.name === 'number' && type.options && type.options.layout === 'slider') {
    return Slider
  }
}