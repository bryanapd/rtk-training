import { Box, Heading, Text } from "@chakra-ui/react"
import Router from "next/router"
import { useSelector } from "react-redux"

export const Posts = ({ }) => {
  const posts = useSelector(state => state.posts)

  return(
    <Box minH="20vh" minW="500px" borderWidth={2} borderRadius="lg" p={10}>
      <Heading size="sm" color="teal" mb={3}>Posts</Heading>
      {
        (posts || []).map(post => (
          <Box key={post.id} borderWidth={1} borderColor="blackAlpha.400" cursor="pointer" onClick={() => Router.push(`/posts/${post.id}`)} m={2} p={2}>
            <Heading size="sm">{post.title}</Heading>
            <Text fontSize="xs">{post.content.substring(0, 100)}</Text>
          </Box>
        ))
      }
    </Box>
  )
}