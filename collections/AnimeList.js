import { 
  Box, Spinner, Heading, Container
} from "@chakra-ui/react";
import Router from "next/router";

import { useGetTopAnimeQuery } from "../redux/features/apiSlice";

const ItemCard = ({ title, mal_id }) => (
  <Box borderWidth={2} p={4} onClick={() => Router.push(`/anime/${mal_id}`)}>
    <Heading size="md">{title}</Heading>
    <Heading size="sm">{mal_id}</Heading>
  </Box>
)

export const AnimeList = ({ }) => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error 
  } = useGetTopAnimeQuery()

  let topAnime
  let content 

  if(isLoading) { 
    content = <Spinner /> 
  } else if (isSuccess) {
    topAnime = data.data;
    content = topAnime.map(anime => <ItemCard key={anime.mal_id} {...anime} /> )
  } else if (isError) {
    content = <Box>{error.toString()}</Box>
  }

  return(
    <Box>
      <Container maxW="container.xl">
        <Heading size="lg">Top Animme</Heading>
        {content}
      </Container>
    </Box>
  )
}