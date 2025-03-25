import React from 'react';
import { Navigate } from 'react-router-dom';

export interface IndexPageProps {
    
}

function IndexPage (props: IndexPageProps) {

    return (
        <Navigate to="/wip" />
    );
}

export default IndexPage;
