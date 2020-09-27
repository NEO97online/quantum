import React, {createContext, useContext, useMemo} from "react"
import {useWindowDimensions} from "react-native"
import {useTheme} from "./theming"

const BreakpointContext = createContext(0)

export function BreakpointProvider({children}) {
   const theme = useTheme()
   const {width} = useWindowDimensions()

   // calculate current breakpoint based on screen width
   const breakpointIndex = useMemo(() => {
      if (theme && theme.breakpoints) {
         for (let i = 0; i < theme.breakpoints.length; i++) {
            const breakpoint = theme.breakpoints[i]
            if (width < breakpoint) {
               return i
            }
         }
         // default to last breakpoint if width is larger than all
         return theme.breakpoints.length - 1
      } else {
         return 0
      }
   }, [width])

   return (
      <BreakpointContext.Provider value={breakpointIndex}>
         {children}
      </BreakpointContext.Provider>
   )
}

export function useBreakpoint() {
   return useContext(BreakpointContext)
}

export function parseResponsiveProp(prop, breakpointIndex) {
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

   return value
}

export function parseResponsiveStyle(style, breakpointIndex) {
   const responsiveStyle = {}

   for (const [key, value] of Object.entries(style)) {
      responsiveStyle[key] = parseResponsiveProp(value, breakpointIndex)
   }

   return responsiveStyle
}
