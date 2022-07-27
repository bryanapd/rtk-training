import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Counter } from '../components/Counter'
import styles from '../styles/Home.module.css'

export default function Home({ name = 'bree' }) {
  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" minH="70vh" borderWidth={2}>
      <h1 style={{ marginBottom: '15px' }}>`Hello! My name is: {name}</h1>
      <Counter />
    </Box>
  )
}
