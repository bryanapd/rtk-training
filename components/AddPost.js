import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Select, Text, Textarea } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from '../redux/features/postsSlice'
import { nanoid } from '@reduxjs/toolkit'


const AddPost = ({ }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavePost = () => {
    if( title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return(
    <Box borderWidth={2} p={4} my={4}>
      <FormControl>
        <FormLabel>Author:</FormLabel>
        <Select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </Select>
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
        <Button type="button" onClick={onSavePost} disabled={!canSave}>Save Post</Button>
      </FormControl>
    </Box>
  )
}

export default AddPost