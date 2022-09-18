import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header class="header my-4">
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto ">
                <div class="header-wrapper flex items-center justify-between">

                    <div class="header-logo">
                        <h1 class="leading-relaxed font-bold text-2xl"><Link to="/">OHU.</Link></h1>
                    </div>

                    {/* <div class="toggle md:hidden">
                        <button>
                            <svg 
                                class="h-6 w-6 fill-current text-black"
                                fill="none" stroke-linecap="round" 
                                stroke-linejoin="round" stroke-width="2" 
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div> */}

                    {/* <navbar class="navbar hidden md:block">
                        <ul class="flex space-x-8 text-sm font-semibold">
                            <li><a href="#" class="active border-b-2 border-orange-500 pb-2">Reviews</a></li>
                            <li><a href="#" class="hover:text-orange-500">People</a></li>
                            <li><a href="#" class="hover:text-orange-500">Partners</a></li>
                            <li><a href="#" class="hover:text-orange-500">Feedback</a></li>
                            <li><a href="#" class="hover:text-orange-500">Pricing</a></li>
                            <li><a href="#" class="cta bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white font-normal">Get the App</a></li>
                        </ul>
                    </navbar> */}

                </div>
        </div>

    </header>

    )
}

export default Header
