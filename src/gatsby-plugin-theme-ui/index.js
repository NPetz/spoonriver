// example theme with Typography.js
import { toTheme } from '@theme-ui/typography'
import grandView from 'typography-theme-grand-view'
import merge from 'lodash.merge'
const typography = toTheme(grandView)


export default merge(typography, {
  // optional style overrides go here
  colors: {
    text: '#121',
    background: '#ddd',
    primary: '#E07A5F',
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