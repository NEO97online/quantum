import React from 'react'
import './App.css'
import { Flex, Center, Spacer, Text, Input, Circle, ThemeProvider } from '../../src'
import theme from './config/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Input placeholder="test" color="text" />
        </Flex>
      </Flex>
    </ThemeProvider>
  )
}

export default App
