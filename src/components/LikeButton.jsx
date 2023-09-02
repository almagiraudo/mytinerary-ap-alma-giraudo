import React, { useState } from 'react'

export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        } setIsLiked(!isLiked)
    }

    return (
        <div className='like-button flex items-center space-x-2 pb-3'>
            <button onClick={toggleLike} className={`w-8 h-8 text-red-500 focus:outline-none border border-black rounded-full  ${
            isLiked ? "fill-current" : "fill-none"
        }`}><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >{isLiked ? (
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                ) : (
                    <path
                        d="M0 0h24v24H0z"
                        fill="none"
                    />)}
                </svg></button>
            <span className="text-gray-700">{likes} {likes === 1 ? "like" : "likes"}</span>
        </div>
    );
}
