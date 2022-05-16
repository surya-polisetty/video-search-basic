import "./topbar.css";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useRef } from "react";

export default function Topbar({recentSearchQuery}) {
    const navigate = useNavigate();
    const searchquery = useRef();
    const err2 = useRef();

    const searchHandler = async ()=>{
        if(searchquery.current.value.length <3){
            err2.current = true;
            window.alert("Please enter more than two characters");
            return;
        } else {
            navigate(`/search/${searchquery.current.value}`);
        }
        
    }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Surya</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input onKeyPress={(e) => {if (e.key === "Enter") searchHandler();}}
            placeholder="Search for... whatever!"
            className="searchInput"
            defaultValue={recentSearchQuery}
            ref={searchquery}
          />
          <SearchIcon className="searchIcon" onClick={searchHandler}/>
        </div>
      </div>
      <div className="topbarRight"></div>
      
    </div>
  );
}
