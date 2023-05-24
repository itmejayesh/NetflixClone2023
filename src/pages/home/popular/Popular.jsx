import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/carousel";

const Popular = () => {
  const { data, laading } = useFetch(`/movie/top_rated`);

  return (
    <section className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Popular Movies All Time</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={laading} />
    </section>
  );
};

export default Popular;
