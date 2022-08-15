import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='inner-container'>
            <h1 className="title" >
                Get to know your<span className="text-color-primary"> personality</span>
            </h1>
            <p className="para">
                It can be a fun icebreaker: Are you an introvert or extrovert?

                While we tend to identify with either the introspective introvert or the outgoing extrovert, figuring out where you fall on the personality spectrum isn’t always that simple.
            </p>
            <div className="">
                <Button onClick={() => navigate("/form")} title="Get started" />
            </div>
        </div>
    );
};

export default Home;