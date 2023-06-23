import React from "react";
import { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import SwitchTabs from "../switchTabs/SwitchTabs";

const Trending = () => {
  const [endpoint, setEnpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEnpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
