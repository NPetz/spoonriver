// example theme with Typography.js
import { toTheme } from '@theme-ui/typography'
import grandView from 'typography-theme-grand-view'
import merge from 'lodash.merge'
const typography = toTheme(grandView)


export default merge(typography, {
  // optional style overrides go here
  colors: {
    text: '#2F3E46',
    background: '#CAD2C5',
    primary: '#52796F',
    secondary: '#84A98C',
    accent: '#bce784'
  },

  styles: {
    ul: {
      listStyleType: 'none',
    },
    a: {
      textDecoration: 'none',
      ":hover": {
        color: 'text',
      }
    }
  },

})