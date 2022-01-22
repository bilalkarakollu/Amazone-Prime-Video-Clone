import React, { useEffect } from 'react';
import AmzOrginals from '../../Layouts/AmzOrginals'
import RecommendedTV from '../../Layouts/RecommendedTV'
import TopTV from '../../Layouts/TopTV'
import { scroolFunction } from '../../Utils';

export default function Index() {
    useEffect(() => {
        scroolFunction()
    }, [0])
    return (
        <>
            <div className={'main'}>
                <div className='h-80 lg:px-48 mb-6'>
                    <div className='bg-white h-full'>

                    </div>
                </div>
                <AmzOrginals />
                <RecommendedTV />
                <TopTV />
            </div>
        </>
    );
}
