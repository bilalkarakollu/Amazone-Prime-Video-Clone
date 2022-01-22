import React from 'react'
import { Icons } from '../../Utils'
import { NavLink, Link } from 'react-router-dom'
export default function index() {
    return (
        <div className='w-full'>
            <div className='bg-slate-800 py-5 px-7 flex items-center w-full'>
                <Link to={'/'}>
                    <img width={100} src="/Images/logo.png" alt="" />
                </Link>
                <div className='flex items-center w-full'>
                    <div className='lg:w-3/4 lg:block hidden'>
                        <ul className='px-5 list-none p-0 m-0 flex text-lg text-slate-300 font-semibold'>
                            <li><NavLink className='m-2' to="/">Home</NavLink></li>
                            <li><NavLink className='m-2' to="storefront/tv">TV Shows</NavLink></li>
                            <li><NavLink className='m-2' to="storefront/movie">Movies</NavLink></li>
                            <li><NavLink className='m-2' to="/categories">Categories</NavLink></li>
                        </ul>
                    </div>

                    <div className='lg:w-1/4 w-full justify-end flex items-center'>
                        <div className='lg:w-4/6 px-5 relative lg:flex hidden items-center'>
                            <span className='absolute px-3 h-full flex items-center cursor-pointer'>
                                <img src={Icons.search} alt="search" />
                            </span>
                            <input placeholder="Search" className='text-xl pl-12 h-10 pb-1 font-light w-full shadow-sm border border-gray-500 bg-inherit' type="text" />
                        </div>
                        <div className='lg:hidden flex sm:w-2/6'>
                            <span className='px-3 h-full flex items-center cursor-pointer'>
                                <img src={Icons.search} alt="search" />
                            </span>
                        </div>
                        <div className='lg:w-2/6 sm:w-2/6 flex items-center'>
                            <img width={30} src="/Images/adult.png" alt="" />
                            <span className='ml-3 text-slate-300'>User</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
