import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImg from '../../../assets/images/error-image.png';

const Error_page = () => {
    // const navigate = useNavigate();
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/'); 
    };

    return (
        <div className='flex flex-col items-center mt-8 bg-white'>
            <img src={ErrorImg} alt="image" />
            <h2 className='text-5xl text-red-600 text-center mt-4'>(Error) Page not found</h2>
            <p className='text-2xl text-center mt-4'>Please try again</p>
            <button className="btn bg-[#9538E2] mt-4 mb-4 text-white" onClick={goToHomePage}>
                Go to home page
            </button>
        </div>
    );
};

export default Error_page;