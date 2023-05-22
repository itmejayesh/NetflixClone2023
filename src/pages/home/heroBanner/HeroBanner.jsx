import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadingImage/img";
import Genres from "../../../components/genres/Genres";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [genres, setGenres] = useState([]);
  const { data, loading } = useFetch("/trending/all/day");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    const bg = url.backdrop + data?.results[randomIndex]?.backdrop_path;
    const backdropTitle = data?.results[randomIndex]?.original_title;
    const backdropSubTitle = data?.results[randomIndex]?.overview;
    const genresIds = data?.results[randomIndex]?.genre_ids;

    setGenres(genresIds);
    setBackground(bg);
    setTitle(backdropTitle);
    setSubTitle(backdropSubTitle);
  }, [data, url]);
  console.log(data);

  return (
    <section className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">{title}</span>
          <span className="subTitle">{subTitle}</span>
          <Genres data={genres} />
        </div>
      </ContentWrapper>
    </section>
  );
};

export default HeroBanner;
