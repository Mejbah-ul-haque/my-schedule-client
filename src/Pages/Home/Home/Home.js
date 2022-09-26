import React from 'react';
import LeadItem from '../LeadItem/LeadItem';
import Goals from '../Goals/Goals';
import Paper from '../Paper/Paper';
import Developer from '../Developer/Developer';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Paper></Paper>
            <LeadItem></LeadItem>
            <Goals></Goals>
            <Developer></Developer>
            <Paper></Paper>
            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;