import React, { useEffect } from 'react';
import AmzOrginals from '../../Layouts/AmzOrginals'
import Recommended from '../../Layouts/Recommended'
import TopMovies from '../../Layouts/TopMovies'
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
                <Recommended />
                <TopMovies />
            </div>
        </>
    );
}
