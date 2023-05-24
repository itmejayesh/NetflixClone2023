import PropTypes from "prop-types";

import poster from "../../assets/noposter.jpg";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadingImage/img";

import "./style.scss";
import { useEffect, useRef } from "react";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (direction) => {
    const container = carouselContainer.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - container.offsetWidth
        : container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = carouselContainer.current;
    const handleScroll = (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
      container.style.scrollBehavior = "auto";
    };

    const addScrollListener = () => {
      container.addEventListener("wheel", handleScroll, { passive: false });
    };

    const removeScrollListener = () => {
      container.removeEventListener("wheel", handleScroll);
    };

    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        addScrollListener();
      } else {
        removeScrollListener();
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the appropriate scroll listener
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      removeScrollListener();
    };
  }, []);

  const skItem = () => {
    return (
      <div className="skeletonitem">
        <div className="poster skeleton"></div>
        <div className="textBlock skeleton"></div>
      </div>
    );
  };

  return (
    <div className="carsouel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="leftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="righttNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterFallBack = poster;
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : posterFallBack;

              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(
                      `/${item.id}/${item.original_language}/${item.title}`
                    )
                  }
                >
                  <div className="poster">
                    <Img src={posterUrl} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton ">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_language: PropTypes.string,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};

export default Carousel;
