import React from 'react'
import { useLocation } from 'react-router'
import {DATA} from "../data"

const Gallery = () => {
    const location = useLocation();
    const slugParam = location.pathname.substr(6);
    console.log(slugParam)

    const tampan = DATA.map(u => u.gallery);
    return (
        <div class="container mx-auto px-5">
    <div class="grid-cols-3 space-y-2  md:space-y-0 md:grid md:gap-3 md:grid-rows-3 ">

           {DATA.map(u =>
           u.slug == slugParam ? (
               <>
                {u.gallery.map(g =>(
                    <div className="w-full rounded ">
                    <img className="rounded-md " src={`/illustrations/${u.slug}/${g.img}`} alt="" />
                    </div>
                ))}
               </>
           ) : null
            )}

        {/* <div class="w-full rounded">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div>
        <div class="w-full col-span-2 row-span-2 rounded">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div>
        <div class="w-full rounded">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div>
        <div class="w-full rounded">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div>
        <div class="w-full rounded">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div>
        <div class="w-full rounded">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div> */}
    </div>
</div>
    )
}

export default Gallery
