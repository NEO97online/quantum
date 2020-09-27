import React, {memo} from "react"
import {View} from "react-native"
import {baseStyleProps} from "./base"
import {useTheme, parseThemeStyle} from "./theming"
import {parseResponsiveStyle, useBreakpoint} from "./responsive"

/**
 * Transforms shorthand aliases and defaults into a unified React style object.
 */
export function applyStyleProps(props, defaults, styleProps) {
   const style = {}
   for (const [key, alias] of Object.entries(styleProps)) {
      style[key] =
         props[key] || props[alias] || defaults[key] || defaults[alias]
   }
   return style
}

/**
 * Creates a Quantum component, applying style props and defaults to a base native component.
 */
export function createQuantumComponent({
   name = "UntitledQuantumComponent",
   component = View,
   defaults = {},
   styleProps = {},
}) {
   const Component = component // capitalize for JSX

   const combinedStyleProps = {...baseStyleProps, ...styleProps}

   const QuantumComponent = ({style = {}, children, ...props}) => {
      const theme = useTheme()
      const breakpoint = useBreakpoint()

      const propStyle = applyStyleProps(props, defaults, combinedStyleProps)

      const responsiveStyle = parseResponsiveStyle(propStyle, breakpoint)

      const themedStyle = parseThemeStyle(responsiveStyle, theme)

      return (
         <Component style={{...themedStyle, ...style}} {...props}>
            {children}
         </Component>
      )
   }

   QuantumComponent.displayName = name

   return memo(QuantumComponent)
}
