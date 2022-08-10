import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"
import Router, { useRouter } from "next/router"
import { useState } from "react"

import { postUpdated } from "../../redux/features/postsSlice"
import { useDispatch, useSelector } from "react-redux"



function EditPost() {
  const { query } = useRouter()
  const dispatch = useDispatch()
  const post = useSelector(state => state.posts.find(post => post.id == query.id))

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const onContentChange = (e) => {
    setContent(e.target.value)
  }
  const onSave = () => {
    if(title && content) {
      dispatch(postUpdated({ id: query.id, title, content }))
      Router.push(`/posts/${post.id}`)
    }
  }

  return(
    <Box>
      <Container maxW="container.lg" py={100}>
        <Heading size="md" mb={10}>Edit Post</Heading>
        <FormControl>
          <FormLabel>Post Title:</FormLabel>
          <Input type="text" placeholder="What's on your mind?" value={title} onChange={onTitleChange} mb={4} />
          <FormLabel>Content:</FormLabel>
          <Textarea value={content} onChange={onContentChange} mb={4} />
        </FormControl>
        <Button size="lg" type="button" onClick={onSave} mt={4}>Save Post</Button>
      </Container>
    </Box>
  )
}

export default EditPost