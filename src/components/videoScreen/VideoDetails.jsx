import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import YT_Channel from "../../assets/YT_channel2.jpg";
import { useDispatch, useSelector } from "react-redux";
import request from "../../api";
import { setComments, setWatchVideoInfo } from "../../features/videos/watchVideoSlice";
import numeral from "numeral";
import moment from "moment";
import VideoComments from "./VideoComments";

const VideoDetails = ({ videoId }) => {
  console.log("videoDetailsPage");
  
  let dispatch = useDispatch();
  let {
    watchVideoInfo: {
      title,
      channelId,
      channelImg,
      channelTitle,
      channelSubscribers,
      description,
      vId,
      descriptionTags,
      viewCount,
      likeCount,
      commentCount,
      publishedAt,
      comments,
    },
  } = useSelector((store) => store.watchVideoInfo);

  // function to bring channel information when we get channel id through getVideoScreenInfo() func
  let getChannelInfo = async (channelId) => {
    let data = await request("/channels", {
      params: {
        part: "snippet,contentDetails,statistics",
        id: channelId || "",
      },
    });

    return data?.data?.items[0];
  };

  // function to get comments of video playing inside the video screen
  let getAllComments = async () => {

    let { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId,
      },
    });
    
    let allComments = data?.items?.map((item) => {
      return {
        text: item.snippet?.topLevelComment?.snippet?.textDisplay,
        likeCount: numeral(item.snippet?.topLevelComment?.snippet?.likeCount)
          .format("0a")
          ?.toUpperCase(),
        publishedAt: moment(
          item.snippet?.topLevelComment?.snippet?.publishedAt
        ).fromNow(),
        author: item.snippet?.topLevelComment?.snippet?.authorDisplayName,
        author_profileImageUrl:
          item.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
      };
    });
    
    return allComments;
    // dispatch(setComments(comments));
  };


  // function to get data about video playing inside the video screen
  let getVideoScreenInfo = async () => {
    let res = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        id: videoId,
      },
    });

    let rawInfo = res?.data?.items[0] || {};
    let channelData = await getChannelInfo(rawInfo?.snippet?.channelId);
    let allComments = await getAllComments();

    let data = {
      title: res?.data?.items[0]?.snippet?.localized?.title,
      channelId: rawInfo?.snippet?.channelId,
      channelImg: channelData?.snippet?.thumbnails?.medium?.url,
      // channelTitle: rawInfo?.snippet?.channelTitle,
      channelTitle: channelData?.snippet?.title,
      channelSubscribers: numeral(channelData?.statistics?.subscriberCount)
        .format("0a")
        ?.toUpperCase(),
      vId: videoId,
      description: rawInfo?.snippet?.localized?.description,
      descriptionTags: rawInfo?.snippet?.tags,
      viewCount: numeral(rawInfo?.statistics?.viewCount)
        .format("0.0a")
        ?.toUpperCase(),
      likeCount: numeral(rawInfo?.statistics?.likeCount)
        .format("0.0a")
        ?.toUpperCase(),
      commentCount: numeral(rawInfo?.statistics?.commentCount)
        .format("0.0a")
        ?.toUpperCase(),
      publishedAt: moment(rawInfo?.snippet?.publishedAt).fromNow(),
      comments : allComments,
    };

    dispatch(setWatchVideoInfo({ data }));
  };

  useEffect(() => {
    getVideoScreenInfo();
  }, []);

  return (
    <div className=" py-2 px-1 md:px-0">
      <h4 className="text-[1.1rem] font-semibold text-slate-50 leading-5 md:text-xl">
        {title || "Error"}
      </h4>

      <div className="flex flex-col justify-between gap-2 md:flex-row md:py-1 md:items-stretch">
        <div className="md:pr-4 py-1 md:py-0 flex md:block justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 md:w-11 md:h-11 rounded-full overflow-hidden">
              <img src={channelImg || YT_Channel} alt="" className="" />
            </div>
            <div className="flex justify-center items-center gap-3 md:gap-0 md:flex-col md:items-start leading-5 text-slate-50">
              <p className="text-xl md:text-lg font-normal tracking-wide">
                {channelTitle || "Error"}
              </p>
              <p className="text-sm md:text-sm font-bold md:font-normal text-nowrap">
                {channelSubscribers || "NA"}{" "}
                <span className="hidden md:inline">Subscribers</span>
              </p>
            </div>
          </div>
          <div className="md:hidden">
            <button className="px-3 py-1 bg-red-700 rounded-full">
              <p className="font-bold text-lg text-slate-50">Subscribe</p>
            </button>
          </div>
        </div>

        <div className="text-slate-50">
          <div className="flex items-center justify-between md:justify-normal h-full gap-3 ">
            <div className="flex bg-gray-700 rounded-full ">
              <button className="flex items-center gap-2 justify-center border-r-2 border-r-slate-200 px-3 py-1 font-semibold">
                <AiOutlineLike className="text-2xl " />
                {likeCount || "-1"}
              </button>
              <button className="flex items-center justify-center font-semibold gap-2 px-3 py-1">
                {"0"}
                <AiOutlineDislike className="text-2xl " />
              </button>
            </div>
            <button className="px-3 py-1 flex items-center justify-center gap-2 bg-gray-700 rounded-full">
              <PiShareFat className="text-xl" />
              <p className="font-semibold">share</p>
            </button>
            <button className="px-3 py-1 flex items-center justify-center gap-2 bg-gray-700 rounded-full">
              <FaRegBookmark className="text-xl" />
              <p className="font-semibold">Save</p>
            </button>
            <button className="px-3 py-1 bg-red-600 rounded-full hidden md:block">
              <p className="font-semibold">Subscribe</p>
            </button>
          </div>
        </div>
      </div>

      <div className="my-2 bg-gray-700 text-slate-50 text-sm rounded-xl px-3 py-2">
        <p className="text-[1rem] text-wrap font-semibold">
          {viewCount || ""} &nbsp; {publishedAt || "Error"} &nbsp;
          {descriptionTags?.map((desc, index) => {
            return <span className="mx-1" key={index}>{`#${desc}`}</span>;
          }) || ""}
        </p>
        <p className="my-2">{/* {description || "Error"} */}</p>
      </div>

      <div className="my-3">
        <h3 className="text-2xl font-semibold text-slate-50 ">
          {commentCount || 0} Comments
          {(comments.length > 0) && <VideoComments comments={comments}/>}
        </h3>
      </div>
    </div>
  );
};

export default VideoDetails;
