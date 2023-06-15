import React from 'react';

export default function About({ currentlySelected }) {
    if (currentlySelected === 'About') {
        return (
            <section>
                <div className='intro-container'>
                    <div className='profile-picture'>
                        <img src={require('Portfolio_2.0/src/assets/images/profile_pic2.jpg')} alt='Will and Babies' />
                    </div>
                    <div className='about-me'>
                        <h3>Welcome to my portfolio!</h3>
                        <p>
                        I'm originally from the great state of Florida, now residing in San Antonio Texas.
                        I consider myslef a modern day renaissance man. Having worked in multiple feilds ranging from an artist, to a warehouse inspector.
                        From a remodelor/real estate agent, to most recently years in the oil fields. 
                        Now im a family man and father of three boys. Two of witch are twins born in the pandemic. 
                        I'm looking to use my wide range of skills, and turn my next job into my career as a web developer.  
                        </p>
                    </div>
                </div>
            </section>
        );
    }   
}
