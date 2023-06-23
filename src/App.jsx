import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { getApiConfig } from "./store/homeSlice";
import { fetchDataFromApi } from "./utils/api";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import NotFound from "./pages/notFound/NotFound";
import SearchResult from "./pages/search/searchResult";

function App() {
  useEffect(() => {
    fetchApiConfig();
  }, []);

  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        const action = getApiConfig(url);
        dispatch(action);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
