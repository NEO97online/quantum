import React from 'react'
import './App.css'
import { Flex, Center, Spacer, Text, Input, Circle } from '../../src'

function App() {
  return (
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
}

export default App
