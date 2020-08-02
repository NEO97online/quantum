import { createElement, memo } from 'react'
import { View } from 'react-native'
import { baseStyleProps } from './base'
import { useTheme, parseThemeStyle } from './theming'

/**
 * Transforms shorthand aliases and defaults into a unified React style object.
 */
export function applyStyleProps(props, defaults, styleProps) {
  const style = {}
  for (const [key, alias] of Object.entries(styleProps)) {
    style[key] = props[key] || props[alias] || defaults[key] || defaults[alias]
  }
  return style
}

/**
 * Creates a Quantum component, applying style props and defaults to a base native component.
 */
export function createQuantumComponent({ 
  name = 'UntitledQuantumComponent',
  component = View,
  defaults = {},
  styleProps = {}
}) {
  const combinedStyleProps = { ...baseStyleProps, ...styleProps }

  const QuantumComponent = ({ style = {}, children, ...props }) => {
    const theme = useTheme()

    const propStyle = applyStyleProps(props, defaults, combinedStyleProps)

    const themedStyle = parseThemeStyle(propStyle, theme) 

    console.log({ name, propStyle, themedStyle })
    
    return createElement(
      component,
      {
        style: { ...themedStyle, ...style },
        ...props
      },
      children
    )
  } 

  QuantumComponent.displayName = name

  return memo(QuantumComponent)
}

