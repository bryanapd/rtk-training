import { Fragment, useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { Container, Box, Flex } from "@chakra-ui/react"

import AddPost from "../../components/AddPost"
import { Posts } from "../../components/Posts"


function Post(){
  const router = useRouter()
  
  return(
    <Fragment>
      <Container maxW="container.xl" py={100}>
        <Flex justifyContent="space-between">
          <AddPost />
          <Posts />
        </Flex>
      </Container>
    </Fragment>
  )
}

export default Post