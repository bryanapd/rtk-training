import { useSelector } from "react-redux";
import Router, { useRouter } from 'next/router'
import { Box, Heading, Container, Button, HStack, Text } from "@chakra-ui/react";


export const PostAuthor = ({ userId }) => {
  const author = useSelector(state => state.users.find(user => user.id === userId))

  return(
    <Text fontSize="sm">{author ? author.name : 'Unknown Motherfucker'}</Text>
  )
}
function SinglePostPage() {
  const { query } = useRouter()
  const post = useSelector(state => state.posts.find(post => post.id === query.id ))

  console.log(query.id)
  if(!post) (
    <Box>
      <Heading size="lg">Page not found!</Heading>
    </Box>
  )

  return(
    <Box py={100}>
      <Container maxW="container.lg" borderWidth={2} rounded="lg" p={5} pb={10}>
        <HStack justifyContent="space-between" mb={10}>
          <Button variant="link" size="md" onClick={() => Router.push('/posts/')} p={0}>Go Back</Button>
          <Button variant="link" size="md" onClick={() => Router.push({ pathname: '/posts/edit', query: { id: post.id } })} p={0}>Edit Post</Button>
        </HStack>
        <PostAuthor userId={post.user} />
        <Heading size="md" mb={4}>Title: {post.title}</Heading>
        <Heading size="sm">Content: {post.content}</Heading>
      </Container>
    </Box>
  )
}
export default SinglePostPage