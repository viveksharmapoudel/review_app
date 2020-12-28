import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight,FaQuoteLeft } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex]= useState(0);
    const {name, job,image,text}= people[index]
  
  return (
        <article className="review">
            <div className="img-container">
                <img className="person-img" 
                    src={image}/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <h3 className="job">{job}</h3>
            <p className="info">{text}</p>
            <div className="button-container">
                <button onClick={()=>{
                    (index >0)?setIndex(index-1): setIndex(people.length-1)
                }} className="prev-btn">
                <FaChevronLeft />
                </button>
                <button onClick={()=>{
                    (index < (people.length-1))?setIndex(index+1): setIndex(0)
                }} className="next-btn">
                <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={() =>{
                    setIndex(Math.floor(Math.random()* people.length))
                }}>Surprise Me</button>
        </article>
  )
};

export default Review;