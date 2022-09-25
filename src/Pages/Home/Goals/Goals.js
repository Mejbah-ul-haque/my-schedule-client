import React, { useEffect, useState } from 'react';
import Goal from '../Goal/Goal';


const Goals = () => {

    const [goals, setGoals] = useState([]);

    useEffect(() => {
        fetch('goals.json')
            .then(res => res.json())
            .then(data => setGoals(data));
    }, [])

    return (
        <div className='container mt-5'>
            <div className='row'>
                {
                    goals.map(goal => <Goal
                        key={goal.id}
                        goal={goal}
                    ></Goal>)
                }
            </div>
        </div>
    );
};

export default Goals;