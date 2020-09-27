import {createElement, createContext, useContext} from "react"

const ThemeContext = createContext({})

export function ThemeProvider({theme, children}) {
   return createElement(ThemeContext.Provider, {value: theme}, children)
}

export function useTheme() {
   return useContext(ThemeContext)
}

const themeStyleMap = {
   color: "colors",
   background: "colors",
   backgroundColor: "colors",
   borderColor: "colors",
   fontColor: "colors",
   fontFamily: "fonts",
   fontWeight: "fontWeights",
   lineHeight: "lineHeights",
   boxShadow: "shadows",
}

export function parseThemeStyle(style = {}, theme = {}) {
   const themedStyle = {...style}
   for (const [key, value] of Object.entries(themedStyle)) {
      if (!value) continue

      const themeKey = themeStyleMap[key]

      if (typeof value === "string" && value.includes(".")) {
         // traverse nested properties like: fonts.body.family
         const split = value.split(".")
         let deepValue = theme
         for (const s of split) {
            deepValue = deepValue[s]
         }
         themedStyle[key] = deepValue
      } else if (themeKey && theme[themeKey] && theme[themeKey][value]) {
         themedStyle[key] = theme[themeKey][value]
      }
   }
   return themedStyle
}
