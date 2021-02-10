// example theme with Typography.js
import { toTheme } from '@theme-ui/typography'
import grandView from 'typography-theme-grand-view'
import merge from 'lodash.merge'
const typography = toTheme(grandView)


export default merge(typography, {
  // optional style overrides go here
  colors: {
    text: '#2F3E46',
    background: '#F4F6F3',
    primary: '#52796F',
    like: '#e86252',
    bookmark: '#2F3E46'
  },
  shadows: {
    deepshade: '1px 1px 10px #131711, -1px -1px 10px #fff',
    shallowshade: '0.5px 0.5px 5px #131711, -0.5px -0.5px 5px #fff'
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