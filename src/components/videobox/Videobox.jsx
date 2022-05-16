import React from 'react';
import "./videobox.css";

export default function Videobox({item}) {
    const thumbnail = item.snippet.thumbnails.high.url;
    const title = item.snippet.title;
    const description = item.snippet.description;
  return (
      <div className='videobox'>
        <div className='inner'>
            <img
                src={thumbnail}
                alt=""
                className="thumbnail"
            />
            <div className='details'>
                <h4 className="title">
                    {title}
                </h4>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
      </div>
    
  )
}
