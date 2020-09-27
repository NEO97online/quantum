import React from "react"
import {
   View as NativeView,
   Text as NativeText,
   TextInput as NativeTextInput,
} from "react-native"
import {createQuantumComponent} from "./quantum"

import {ThemeProvider, useTheme} from "./theming"
import {BreakpointProvider, useBreakpoint} from "./responsive"

export {ThemeProvider, BreakpointProvider, useTheme, useBreakpoint}

/**
 * Wraps children in all necessary Quantum providers.
 */
export function QuantumProvider({theme, children}) {
   return (
      <ThemeProvider theme={theme}>
         <BreakpointProvider>{children}</BreakpointProvider>
      </ThemeProvider>
   )
}

/**
 * The most basic component; essentially a standard div.
 */
export const Box = createQuantumComponent({
   name: "Box",
   component: NativeView,
   defaults: {
      display: "block",
      fontFamily: "fonts.default",
   },
})

/**
 * A basic box with flexbox styling.
 */
export const Flex = createQuantumComponent({
   name: "Flex",
   component: NativeView,
   defaults: {
      display: "flex",
      fontFamily: "fonts.default",
   },
   styleProps: {
      alignItems: "align",
      justifyContent: "justify",
   },
})

/**
 * A flexbox with defaults for aligning and justifying center.
 */
export const Center = createQuantumComponent({
   name: "Center",
   component: NativeView,
   defaults: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   styleProps: {
      alignItems: "align",
      justifyContent: "justify",
   },
})

/*
 * A basic text component. Comes with aliases for font settings.
 */
export const Text = createQuantumComponent({
   name: "Text",
   component: NativeText,
   defaults: {
      display: "inline-block",
      fontFamily: "fonts.default",
   },
   styleProps: {
      fontFamily: "family",
      fontSize: "size",
      fontWeight: "weight",
      textAlign: "align",
   },
})

/*
 * A flexbox in the shape of a circle. Centers children by default.
 */
export const Circle = createQuantumComponent({
   name: "Circle",
   component: NativeView,
   defaults: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
   },
})

/**
 * A basic text input.
 */
export const Input = createQuantumComponent({
   name: "Input",
   component: NativeTextInput,
   defaults: {
      fontFamily: "fonts.default",
   },
   styleProps: {
      fontFamily: "family",
      fontSize: "size",
      fontWeight: "weight",
      textAlign: "align",
   },
})

/**
 * Really just an alias for Box, used specifically to add space between elements.
 */
export const Spacer = createQuantumComponent({
   name: "Spacer",
   component: NativeView,
   defaults: {display: "block"},
})
