import Header from "@/components/AnimeList/header"
import AnimeList from "@/components/AnimeList"
import { getAnimeResponse, getNestedAnimeResponse, reproduceData } from "@/libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduceData(recommendedAnime, 8)



  return (
    <>
      <section>
        <Header title="Top Populer" linkTitle="See All" linkHref="/populer" />
        <AnimeList api={topAnime}/>
      </section>
      <section>
        <Header title="Recomended"  />
        <AnimeList api={recommendedAnime}/>
      </section>
    </>
  )
}

export default Page