import React from 'react';
import './Goal.css';

const Goal = ({ goal }) => {
    const { title, text, logo } = goal;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4 mb-4 '>
            <div className='border border-2 rounded border-secondary text-center pb-4 px-4 goal-box'>
                <h1 className='mb-5'><span style={{ backgroundColor: 'black' }} className='rounded-circle p-4  text-white '>{logo}<small className='fs-6 fw-normal'></small></span></h1>
                <h5 className='mt-5 text-warning'>{title}</h5>
                <p className='p-2 text-light'>{text}</p>
            </div>
        </div>

    );
};

export default Goal;
