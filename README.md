# 🔬 Quantum

> **quan·tum:** any of the very small increments or parcels into which many forms of energy are subdivided

Quantum contains low-level components for building cross-platform applications in React and React Native. It aims to speed up development and allow for writing concise code.

## Installation

```
npm install quantum-components
```

## Usage

```jsx
import { Flex, Center, Text, Spacer, Circle, Input } from 'quantum-components'

const App = () => (
  <Flex p={8}>
    <Center w={64} h={32} p={8} bg="#448aff" radius={4}>
      <Text size={12} color="white">
        Testing
      </Text>
    </Center>
    <Spacer h={32} />
    <Flex dir="row">
      <Circle bg="#448aff" />
      <Spacer w={8} />
      <Input placeholder="test" />
    </Flex>
  </Flex>
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

## Components

#### \<Box />

The most basic component; essentially a standard div.

Defaults:
```js
{
  display: 'block'
}
```

Additional props/aliases: **None**

Usage:
```jsx
<Box></Box>
```

#### \<Flex />

A basic box with flexbox styling.

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

Usage:
```jsx
<Flex dir="column" align="center" justify="space-between"></Flex>
```

#### \<Center />

A flexbox with defaults for aligning and justifying center.

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

Usage:
```jsx
<Center>
  <Text>I'm centered!</Text>
</Center>
```
