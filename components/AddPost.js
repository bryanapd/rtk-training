import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { postAdded } from '../redux/features/postsSlice'
import { nanoid } from '@reduxjs/toolkit'


const AddPost = ({ }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePost = () => {
    if( title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )
      setTitle('')
      setContent('')
    }
  }

  return(
    <Box borderWidth={2} p={4} my={4}>
      <FormControl>
        <FormLabel htmlFor="postTitle">Post Title:</FormLabel>
        <Input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <FormLabel htmlFor="postContent">Content:</FormLabel>
        <Textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <Button type="button" onClick={onSavePost}>Save Post</Button>
      </FormControl>
    </Box>
  )
}

export default AddPost