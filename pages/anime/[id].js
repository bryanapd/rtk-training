import Router, { useRouter} from 'next/router'
import Link from 'next/link'
import { Box, Container, Grid } from '@chakra-ui/react'
import { useGetAnimeQuery } from '../../redux/features/apiSlice'

function Anime() {
  const { query } = useRouter()
  console.log("anime by id", useGetAnimeQuery(query.id))
  return(
    <Box>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>

        </Grid>
      </Container>
    </Box>
  )
}

export default Anime
