"use client";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const YoutubeBlock = ({data}) => {
  if (!data.url) {
    return null;
  }

  const options = {
    playerVars: {
      autoplay: data.autoPlay ? 1 : 0,
      mute: data.muted ? 1 : 0,
    },
  };

  const id = getYouTubeId(data.url)?.toString();

  return <YouTube videoId={id} opts={options} className="youtubeContainer" />;
};

export default YoutubeBlock;
