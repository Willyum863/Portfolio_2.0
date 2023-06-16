import React from 'react';

export default function Projects({ currentlySelected }) {
    if (currentlySelected === 'Projects') {
        return (
            <div className='projects'>
                <h3 className='center'>Some of the Projects I made or been a part of.</h3>
                <section>
                    <div className='project'>
                        <a href='https://github.com/danieltran2016/Chuckles' target='_blank' rel="noreferrer"> Chuckles</a>
                        <p>
                        This program was developed during brainstorming of Project 1, we were told to do a stand-up when we met with one another. 
                        Therefore, we created a stand-up app from old school nostalgia. Nobody has heard a good Chuck Norris joke in years. Dad jokes, are never out of style.  
                        </p>
                        <a href='https://danieltran2016.github.io/Chuckles/' target='_blank' rel="noreferrer">
                            <img src={require('Portfolio_2.0/src/assets/images/ChuckNorris.jpg')} alt='Chuck Norris' />
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/danieltran2016/Elections' target='_blank' rel="noreferrer"> Vote For Me</a>
                        <p>
                        Elections is a full stack web application used to gather people's choices and display them.
                        Users can create an account and make 1 candidate profile per account. 
                        The candidates and data standings can be viewed from the homepage without logging in. 
                        For a user to submit their choice, they must log in or create a profile. 
                        Any candidate in the running can withdraw their profile at any time.
                        </p>
                        <a href='https://election-pro.herokuapp.com/' target='_blank' rel="noreferrer">
                            <img src={require('Portfolio_2.0/src/assets/images/Election.png')} alt='Voters' />
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/Willyum863/horiseon-fixed' target='_blank' rel="noreferrer"> Horiseon</a>
                        <p>
                        A codebase that follows accessibility standards SO THAT our own site is optimized for search engines
                        </p>
                        <a href='https://github.com/Willyum863/horiseon-fixed' target='_blank' rel="noreferrer">
                            <img src={require('Portfolio_2.0/src/assets/images/horiseon.jpg')} alt='horiseon site' />
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/Willyum863/Weekly-planner' target='_blank' rel="noreferrer"> Weekly Planner</a>
                        <p>
                        AS AN employee with a busy schedule. 
                        I WANT to add important events to a daily planner SO THAT I can manage my time effectively
                        </p>
                        <a href='https://willyum863.github.io/Weekly-planner/' target='_blank' rel="noreferrer">
                            <img src={require('Portfolio_2.0/src/assets/images/Screenshot 2023-03-01 182637.png')} alt='Weekly planner' />
                        </a>
                    </div>
                </section>
            </div>   
        );
    }
}