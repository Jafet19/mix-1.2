import React, { useState } from "react";

function PostCards({anime}) {
    const [showInfo, setShowInfo] = useState(true)
    const {title, image,description, rating} = anime

    return(
        <li className="card">
        {showInfo ? (
            <button onClick={()=> setShowInfo((show)=> !show)}><img src={image} alt={title} /></button>
    ) : (
    <button onClick={()=> setShowInfo((show)=> !show)}><img src={image} alt={title} /><p>{description}</p></button>
    )}
        <h4>{title}</h4>
        <h4> ⭐️ : {rating}</h4>
      </li>
    )
}
export default PostCards