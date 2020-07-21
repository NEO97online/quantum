# 🔬 Quantum

> **quan·tum:** any of the very small increments or parcels into which many forms of energy are subdivided

Quantum contains low-level components for building cross-platform applications in React and React Native. It aims to speed up development and allow for writing concise code.

## Installation

```
npm install quantum-components
```

## Usage

```js
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

