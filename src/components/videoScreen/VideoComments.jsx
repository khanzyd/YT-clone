import React, { useEffect } from 'react'
import request from '../../api'
import numeral from 'numeral';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setComments } from '../../features/videos/watchVideoSlice';

const VideoComments = ({comments}) => {
    console.log(comments);
    
    return (
        <div>
            {
                comments.map((comment)=>{
                    return(
                        <div className='flex w-full bg-orange-500'>
                            <div className="bg-red-600 w-[10%] overflow-hidden my-auto">
                                <img src={comment.author_profileImageUrl} alt="" className='w-full rounded-full'/>
                            </div>
                            <div className="bg-violet-700 w-[90%] text-wrap">
                                <div className='flex gap-3'>
                                    <h2 className='text-sm'>{comment.author}</h2>
                                    <p className='text-xs'>{comment.publishedAt}</p>
                                </div>
                                <p className='text-sm text-wrap'>{comment.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VideoComments