import React, { useState } from 'react';
import LayoutHeader from '../components/layouts/header';
import MasonryLayout from '../components/partials/masonryBody';

export const LandingPage = () => {
    const [allRef, setAllRef] = useState({});

    return (
        <div className="bg-gray-800">
            <LayoutHeader toChild={allRef} sendToParent={setAllRef} />
            <MasonryLayout toChild={allRef} sendToParent={setAllRef} />
        </div>
    );
};

export default LandingPage;
