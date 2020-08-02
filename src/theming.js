import { createElement, createContext, useContext } from 'react'

const ThemeContext = createContext({})

export function ThemeProvider({ theme, children }) {
  return createElement(ThemeContext.Provider, { value: theme }, children)
}

export function useTheme() {
  return useContext(ThemeContext) 
}

const themeStyleMap = {
  color: 'colors',
  background: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  fontColor: 'colors',
  fontFamily: 'fontFamilies',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  boxShadow: 'shadows',
}

export function parseThemeStyle(style = {}, theme = {}) {
  const themedStyle = { ...style }
  for (const [key, value] of Object.entries(themedStyle)) {
    const themeKey = themeStyleMap[key]
    if (themeKey && theme[themeKey] && theme[themeKey][value]) {
      themedStyle[key] = theme[themeKey][value]
    }
  }
  return themedStyle
}

/**
export function parseThemeProp(prop, breakpointIndex, theme, category) {
  let value
  if (Array.isArray(prop)) {
    if (breakpointIndex > prop.length - 1) {
      value = prop[prop.length - 1]
    } else {
      value = prop[breakpointIndex]
    }
  } else {
    value = prop
  }

  if (category && theme[category] && theme[category][value]) {
    return theme[category][value]
  } else {
    return value
  } 
}
 **/
