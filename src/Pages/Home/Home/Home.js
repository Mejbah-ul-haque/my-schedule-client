import React from 'react';
import LeadItem from '../LeadItem/LeadItem';
import Goals from '../Goals/Goals';

const q = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <LeadItem></LeadItem>
            <Goals></Goals>
        </div>
    );
};

export default q;