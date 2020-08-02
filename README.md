# 🔬 Quantum

> **quan·tum:** any of the very small increments or parcels into which many forms of energy are subdivided

Quantum contains low-level components for building cross-platform applications in React and React Native. It aims to speed up development and allow for writing concise code.

## Installation

```
npm install quantum-elements
```

## Usage

```jsx
import { Flex, Center, Text, Spacer, Circle, Input, QuantumProvider } from 'quantum-elements'

const theme = {
  colors: {
    primary: '#448aff',
    secondary: '#1a1a1a'
  },
  fonts: {
    mono: 'Menlo, monospace'
  }
}

const App = () => (
  <QuantumProvider theme={theme}>
    <Flex p={8}>
      <Center w={64} h={32} p={8} bg="primary" radius={4}>
        <Text size={12} color="white">
          Testing
        </Text>
      </Center>
      <Spacer h={32} />
      <Flex dir="row">
        <Circle bg="primary" />
        <Spacer w={8} />
        <Input placeholder="test" color="secondary" fontFamily="mono" />
      </Flex>
    </Flex>
  </QuantumProvider>
)
```

## Base Props

All Quantum components inherit the following base props: (aliases displayed in parenthesis)
- display
- flex
- alignSelf
- justifySelf
- width (w)
- height (h)
- maxWidth (maxW)
- maxHeight (maxH)
- position (pos)
- top (t)
- right (r)
- bottom (b)
- left (l)
- margin (m)
- marginTop (mt)
- marginRight (mr)
- marginBottom (mb)
- marginLeft (ml)
- marginHorizontal (mx)
- marginVertical (my)
- padding (p)
- paddingTop (pt)
- paddingRight (pr)
- paddingBottom (pb)
- paddingLeft (pl)
- paddingHorizontal (px)
- paddingVertical (py)
- color
- background (bg)
- backgroundColor (bgColor)
- border
- borderColor
- borderRadius (radius)
- boxShadow (shadow)
- lineHeight
- characterSpacing (charSpacing)

## Components

### \<Box />

The most basic component; essentially a standard div.

```jsx
<Box></Box>
```

Defaults:
```js
{
  display: 'block'
}
```

Additional props/aliases: **None**

### \<Flex />

A basic box with flexbox styling.

```jsx
<Flex dir="column" align="center" justify="space-between"></Flex>
```

Defaults:
```js
{
  display: 'flex'
}
```

Additional props/aliases:
- flexDirection (dir)
- alignItems (align)
- justifyContent (justify)

### \<Center />

A flexbox with defaults for aligning and justifying center.

```jsx
<Center>
  <Text>I'm centered!</Text>
</Center>
```

Defaults:
```js
{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
```

Additional props/aliases:
- flexDirection (dir)
- alignItems (align)
- justifyContent (justify)

## Theming

Quantum provides theming support out of the box, through React Context.

First, create a theme file like so:

```js
// theme.js
export default {
  colors: {
    text: '#1a1a1a',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
}
```

Next, import `QuantumProvider` from Quantum, along with your theme, high up in your application:

```jsx
// App.jsx
import { QuantumProvider } from 'quantum-elements'
import theme from './theme' // the theme file you created

export default function App() {
  return (
    <QuantumProvider theme={theme}>
      // The rest of your app
    </QuantumProvider>
  )
}
```


To use theme values in Quantum components, just use the theme item name as a style value:

```jsx
<Box bg="primary">
  <Text family="body" color="secondary" weight="heading">
    Hello Quantum!
  </Text>
</Box>
```

You can also access the theme object directly with the `useTheme` hook:

```jsx
import { useTheme } from 'quantum-elements'

export default function MyComponent() {
  const theme = useTheme()

  console.log(theme)

  return (
    <Box color={theme.colors.primary} />
  )
}
```

## Responsiveness

Quantum adds support for responsive styling out of the box. First, make sure your theme (see Theming) has a "breakpoints" array, like so:

```js
export default {
  breakpoints: [640, 832, 1024],
  colors: {
    // .....
```

With breakpoints defined in the theme, you can now pass arrays as values to style props. The value displayed will match the index of the breakpoints array based on screen size.

```jsx
// 64px on <640px screens,
// 128px on <832px screens,
// 256px on <1024px screens,
// 512px on >=1024px screens
<Box w={[64, 128, 256, 512]}>
```
