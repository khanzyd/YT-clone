import React, { useEffect } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

const VideoComments = ({ comments }) => {
  console.log(comments);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="flex w-full gap-2 my-3" key={comment.commentId}>
            <div className="w-[5%] overflow-hidden">
              <img
                src={comment.author_profileImageUrl}
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="w-[90%] text-wrap flex flex-col gap-1">
              <div className="flex gap-3 items-center">
                <h2 className="text-sm">{comment.author}</h2>
                <p className="text-xs font-light">{comment.publishedAt}</p>
              </div>
              <div className="w-full">
                <p className="text-sm w-full">{comment.text}</p>
              </div>
              <div className="flex gap-3 mt-2 mb-1">
                  <AiOutlineLike />
                  <BiDislike />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoComments;
