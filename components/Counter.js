import { useState } from "react";
import { Box, Button, HStack, Stack, Heading, Input } from "@chakra-ui/react";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync
} from '../redux/features/counterSlice'
import { useSelector, useDispatch } from "react-redux";

export const Counter = ({}) => {
  const [amount, setAmount] = useState(10)
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <HStack minH="20vh" borderWidth={2} borderRadius="lg" spacing={10} p={10}>
      <Stack>
        <Button onClick={() => dispatch(increment())}>Increment +</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement - </Button>
        <Button onClick={() => dispatch(incrementAsync(Number((amount))))}>Increment By Amount ++</Button>
        <Input value={amount} onChange={(event) => setAmount(event.target.value)} />
      </Stack>
      <Box>
        <Heading size="lg" fontWeight="black" color="teal.500">= {count}</Heading>
      </Box>
    </HStack>
  )
}