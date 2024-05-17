import React, { useEffect } from "react";
import TextTruncate from "react-text-truncate";
import YT_Thumbnail from "../../assets/YT_thumbnail.png";
import YT_Channel from "../../assets/YT_channel2.jpg";
import request from "../../api";

const Home_VideoCard = ({ video }) => {
  let {
    snippet: {
      title,
      thumbnails: { medium },
    },
  } = video;

  useEffect(() => {
    let generateVideoData = async () => {
      let res = await request("/videos", {
        params: {
          id: video.id,
          part: "statistics,contentDetails",
        },
      });
      console.log(res);
    };
    generateVideoData();
  }, []);

  return (
    <>
      <div className="w-full py-2 cursor-pointer">
        <div className="relative w-full rounded-xl overflow-hidden">
          <img
            src={medium.url || YT_Thumbnail}
            alt=""
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-1 right-2 text-sm font-semibold text-slate-100 bg-yt-main px-1">
            9:10:54
          </span>
        </div>
        <div className="flex justify-between mt-4 md:mt-4">
          <div className="w-[12%]  overflow-hidden">
            <img
              src={YT_Channel}
              alt=""
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col text-slate-100 leading-5 w-[85%]">
            <TextTruncate
              line={2}
              className="font-bold"
              element="h3"
              truncateText="…"
              text={title}
              // "INSANE OCTANE SOLO 23 KILLS and 5,960 DAMAGE APEX LEGENDS GAMEPLAY 2024 VER 20"
              // textTruncateChild={<a href="#">Read on</a>}
            />
            {/* <h3 className="font-bold">
              INSANE OCTANE SOLO 23 KILLS and 5,960 DAMAGE
            </h3> */}
            <div className="flex gap-3 md:gap-0 md:flex-col my-1 font-light">
              <p>APEX LEGENDS</p>
              <p>115M views • 1 year ago </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_VideoCard;
