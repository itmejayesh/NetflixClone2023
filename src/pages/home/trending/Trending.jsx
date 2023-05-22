import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// import SwtichTabs from "../../../components/switchtabs/SwtichTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, laading } = useFetch(`/trending/all/${endpoint}`);

  // const onTabChange = (tab) => {
  //   switch (tab) {
  //     case "Day":
  //       setEndpoint("day");
  //       break;
  //     case "Week":
  //       setEndpoint("week");
  //       break;
  //     case "Month":
  //       setEndpoint("month");
  //       break;
  //     case "Year":
  //       setEndpoint("year");
  //       break;
  //     default:
  //       break;
  //   }
  // };
  return (
    <section className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        {/* <SwtichTabs
          data={["Day", "Week", "Month", "Year"]}
          onTabChange={onTabChange}
        /> */}
      </ContentWrapper>
      <Carousel data={data?.results} loading={laading} />
    </section>
  );
};

export default Trending;
