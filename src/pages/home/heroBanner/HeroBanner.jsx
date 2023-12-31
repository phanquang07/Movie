import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFetch from "../../../hooks/useFetch";
import Image from "../../../components/lazyLoadImage/Image";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleSearch = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Image src={background} />
        </div>
      )}
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search movie..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => handleSearch()}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
