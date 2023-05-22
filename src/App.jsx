import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { fetchingData } from "./utils/api";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Search from "./pages/searchResult/Search";
import Explore from "./pages/explore/Explore";
import PagenNotFound from "./pages/404/404";
import { useDispatch } from "react-redux";
import { getApiConfig, getGenres } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const genresCall = async () => {
      let promises = [];
      let endPoints = ["tv", "movie"];
      let allGenres = {};

      endPoints.forEach((url) => {
        promises.push(fetchingData(`/genre/${url}/list`));
      });

      const data = await Promise.all(promises);

      data.forEach(({ genres }) => {
        genres.forEach((item) => {
          allGenres[item.id] = item;
        });
      });

      dispatch(getGenres(allGenres));
    };

    const fetchApiConfig = () => {
      fetchingData("/configuration").then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfig(url));
      });
    };

    genresCall();
    fetchApiConfig();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PagenNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
