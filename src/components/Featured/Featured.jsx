import React, { Component } from 'react';
import photos from "../../data";
import "./style.css";


function Featured(){
    const [firstUrl, secondUrl] = photos;

    return (
        <section className="featured-section">
            <div className="featured-row-layout">
                <h6>green</h6>
                <img src={firstUrl}/>
            </div>{/*가로 */}
            <div className="featured-column-layout">
                <h6>lily</h6>  
                <img src={secondUrl}/>  
            </div>{/*세로 */}
        </section>
    );
}

export default Featured;