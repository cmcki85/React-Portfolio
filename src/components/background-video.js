import React from "react";
import Video from '../media/waves-hero-video.mp4'

const BackgroundVideo = ({siteContent}) => {
    return(
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="relative z-30">
                {siteContent}
            </div>
            <video 
                autoPlay="autoplay" 
                loop="loop" 
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source src={Video} type="video/mp4" />
                Your browser doesn't support background video.
            </video>
        </div>
    )
}

export default BackgroundVideo