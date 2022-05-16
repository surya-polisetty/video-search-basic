import "./search.css";
import React from 'react';
import Videobox from "../../components/videobox/Videobox"
import { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import { useParams } from "react-router";

export default function Search() {
    const [data, setData] = useState();
    const apiKey = "AIzaSyBNQh_fCJKStfs36yhLO1sLV26gSQ01g-8";
    console.log(process.env.REACT_APP_API_KEY);
    const searchquery = useParams().searchquery;
    const url=`https://www.googleapis.com/youtube/v3/search?maxResults=20&part=snippet&q=${searchquery}&key=${apiKey}`
    useEffect(()=>{
        try{
        fetch(url)
        .then(res => res.json())
            .then(data => setData(data))
        }catch(err){console.log(err)}
    }, [searchquery, url])

    return (
        <>
            <Topbar recentSearchQuery={searchquery}/>
            <div className="grid">
            {data &&
                data.items.map((item) => (
                        <Videobox item={item} />
                ))
            }     
            </div>
        </>
    );
}