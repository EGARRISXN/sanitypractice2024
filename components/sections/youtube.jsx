"use client";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const YoutubeBlock = ({data}) => {
  if (!data.url) {
    return null;
  }

  const options = {
    playerVars: {},
  };

  const id = getYouTubeId(data.url)?.toString();

  return <YouTube videoId={id} opts={options} className="youtubeContainer" />;
};

export default YoutubeBlock;
