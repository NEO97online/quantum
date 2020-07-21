import React from 'react'
import { View } from 'react-native'
import { baseStyleProps } from './base'

/**
 * Creates a style object from a dictionary of style props and defaults.
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
    const propStyle = applyStyleProps(props, defaults, combinedStyleProps)
    
    return React.createElement(
      component,
      {
        style: { ...propStyle, ...style },
        ...props
      },
      children
    )
  } 

  QuantumComponent.displayName = name

  return React.memo(QuantumComponent)
}

