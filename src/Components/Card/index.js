import React, { useEffect } from 'react'
const ImgPath = 'https://image.tmdb.org/t/p/w500'

export default function Index({ data }) {

    if (data.backdrop_path) {
        return (
            <div key={data.id} className='card lg:w-1/6 h-44 flex-shrink-0 relative'>
                <div className='bg-white text-slate-800 h-full card-in'>
                    <img className='object-cover object-center w-full h-full' src={ImgPath + data.backdrop_path} alt="" />
                </div>
            </div>
        )
    } else {
        return null
    }
}
