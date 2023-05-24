import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/carousel";

const HindiMovie = () => {
  const { data, laading } = useFetch(
    `/discover/movie?primary_release_year=2023&&include_video=trueregion=In&with_origin_country=IN`
  );

  return (
    <section className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Hindi Movies</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={laading} />
    </section>
  );
};

export const NewHindiMovie = () => {
  const { data, laading } = useFetch(
    `/discover/movie?include_video=true&region=In&with_origin_country=IN`
  );

  return (
    <section className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Indian Movies</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={laading} />
    </section>
  );
};

export default HindiMovie;
