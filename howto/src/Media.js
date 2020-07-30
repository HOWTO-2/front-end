import { css } from 'styled-components'

const sizes = {
   large: 1600,
   medium: 1000,
   small: 700,
   tiny: 400
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})