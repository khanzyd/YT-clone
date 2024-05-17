import React, { useEffect, useState } from "react";
import TextTruncate from "react-text-truncate";
import YT_Thumbnail from "../../assets/YT_thumbnail.png";
import YT_Channel from "../../assets/YT_channel2.jpg";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";

const Home_VideoCard = ({ video }) => {
  let [duration, setDuration] = useState("");
  let [views, setViews] = useState("");
  let [channelThumbnail, setChannelThumbnail] = useState("");
  let {
    snippet: {
      channelId,
      channelTitle,
      publishedAt,
      title,
      thumbnails: { medium },
    },
  } = video;
  useEffect(() => {
    let generateVideoData = async () => {
      try {
        let {
          data: { items },
        } = await request("/videos", {
          params: {
            id: video.id,
            part: "statistics,contentDetails",
          },
        });
        let seconds = moment
          .duration(items[0].contentDetails.duration)
          .asSeconds();
        let _duration = moment.utc(seconds * 1000).format("mm:ss");
        let totalViews = numeral(items[0].statistics.viewCount).format("0.0a");
        setDuration(_duration);
        setViews(totalViews);
        try {
          let {
            data: { items },
          } = await request("/channels", {
            params: {
              id: channelId,
              part: "snippet",
            },
          });
          setChannelThumbnail(items[0].snippet.thumbnails.high.url);
        } catch (err) {}
      } catch (err) {
        console.log(err);
      }
    };
    generateVideoData();
  }, []);

  return (
    <>
      {/* {console.log("loading video component")} */}
      <div className="w-full py-2 cursor-pointer">
        <div className="relative w-full rounded-xl overflow-hidden ">
          <img
            src={medium.url || YT_Thumbnail}
            alt=""
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-1 right-2 text-sm font-semibold text-slate-100 bg-yt-main px-1">
            {duration}
          </span>
        </div>
        <div className="flex justify-between mt-4 md:mt-4">
          <div className="w-[12%]  overflow-hidden">
            <img
              src={channelThumbnail}
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
            />
            <div className="flex gap-3 md:gap-0 md:flex-col my-1 font-light">
              <p>{channelTitle}</p>
              <p>
                {views.toUpperCase()} views • {moment(publishedAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_VideoCard;
