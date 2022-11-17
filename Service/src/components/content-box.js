import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContentBox = ({contentTitle, contentLocation, contentBody, contentIcon}) => {
    return(
        <article className="flex justify-center flex-col font-body pb-8 px-10 text-lg">
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <span className='font-bold'>{contentTitle}</span>
                    <span className="font-semi-bold ">
                    @ <span className="text-body-emphasize">{contentLocation}</span>
                    </span>
                </div>
                <FontAwesomeIcon
                    className="self-start mt-3 mr-1 "
                    icon={contentIcon}
                    size="2x"
                    color='#8C5007'
                />
        </div>
        <hr className="h-2" />
        <p className="whitespace-pre-line">
            {contentBody}
        </p>
    </article>
    )
}

export default ContentBox