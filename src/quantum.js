import React, {memo, forwardRef} from "react"
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

   const QuantumComponent = forwardRef(({id, style = {}, ...props}, ref) => {
      const theme = useTheme()
      const breakpoint = useBreakpoint()

      const propStyle = applyStyleProps(props, defaults, combinedStyleProps)

      const responsiveStyle = parseResponsiveStyle(propStyle, breakpoint)

      const themedStyle = parseThemeStyle(responsiveStyle, theme)

      return (
         <Component
            nativeID={id}
            ref={ref}
            style={{...themedStyle, ...style}}
            {...props}
         />
      )
   })

   QuantumComponent.displayName = name

   return memo(QuantumComponent)
}
