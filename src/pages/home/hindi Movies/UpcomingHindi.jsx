import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/carousel";

const UpcomingMovie = () => {
  const { data, laading } = useFetch(
    `/discover/movie?primary_release_date.gte=2000-01-01&primary_release_date.lte=2005-01-01&include_video=true&region=In&with_origin_country=IN`
  );

  return (
    <section className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Old Movies</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={laading} />
    </section>
  );
};

export default UpcomingMovie;
