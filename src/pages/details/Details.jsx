import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Cast from "./cast/Cast";
import Recommendation from "./corousels/Recommendation";
import Similar from "./corousels/Similar";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import "./style.scss";
import VideosSection from "./videoSection/VideoSection";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
