import Head from 'next/head'
import { Box, Button, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { Counter } from '../components/Counter'
import { useRouter } from 'next/router'
import { AnimeList } from '../collections/AnimeList'

export default function Home({ name = 'bree' }) {
  const router = useRouter()
  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" minH="70vh" borderWidth={2}>
      <Heading size="sm" mb={4}>`Hello Redux!</Heading>
      <Counter />
      <Button size="sm" onClick={() => router.push('/posts')} mb={10}>Go to Posts</Button>
      <AnimeList />
    </Box>
  )
}
