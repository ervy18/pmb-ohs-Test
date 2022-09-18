import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import Gallery from './Gallery'

const Item = (props) => {
    const {data} = props
    const location = useLocation();
    const slugParam = location.pathname.substr(6);
    const slug = data.map(s => s.slug)

    const handler = () =>{
        for(let i = 0; i<slug.length; i++){
            if(slugParam === slug[i]){
                console.log(slug[i])
            }
        }
    }   
    handler();
    
    return (
        <>
            {data.map(u =>
                u.slug == slugParam ? 
                <section className="container mx-auto px-5">
                    <div className="flex flex-col items-center py-8">
                        <div className="flex flex-col w-full mb-12 text-left">
                            {u.registration ? (
                                <button onClick={() => window.location.assign(`${u.registration}`)} className="btn btn-primary w-48 mb-5">Pendaftaran</button> 
                            ) : null}
                            <div className="w-full mx-auto lg:w-1/2">

                                <h1 className="mx-auto  text-2xl font-semibold  lg:text-3xl">{u.title}</h1>
                                <div className="aspect-w-7 aspect-h-4 mt-5">
                                    <iframe src={u.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                {/* <img className="rounded-md" src="https://picsum.photos/id/500/800/400" /> */}

                                {/* <div className="w-full carousel">
                                    <div id="item1" className="w-full pt-20 carousel-item">
                                        <img src="https://picsum.photos/id/500/800/400" className="w-full"/>
                                    </div> 
                                    <div id="item2" className="w-full pt-20 carousel-item">
                                        <img src="https://picsum.photos/id/501/800/400" className="w-full"/>
                                    </div> 
                                    <div id="item3" className="w-full pt-20 carousel-item">
                                        <img src="https://picsum.photos/id/502/800/400" className="w-full"/>
                                    </div> 
                                    <div id="item4" className="w-full pt-20 carousel-item">
                                        <img src="https://picsum.photos/id/503/800/400" className="w-full"/>
                                    </div>
                                    </div> 
                                    <div className="flex justify-center w-full py-4 space-x-2">
                                        <Link to={`/unit/${u.slug}/carousel#item1`} className="btn btn-xs btn-circle">1</Link> 
                                        <Link to={`/unit/${u.slug}/carousel#item2`} className="btn btn-xs btn-circle">2</Link> 
                                        <Link to={`/unit/${u.slug}/carousel#item3`} className="btn btn-xs btn-circle">3</Link> 
                                        <Link to={`/unit/${u.slug}/carousel#item4`} className="btn btn-xs btn-circle">4</Link>
                                </div> */}
                                
                                <h2 className="mx-auto mt-4 mb-4 text-xl font-semibold ">Profil Singkat</h2>
                                <p className="mx-auto text-base font-normal leading-relaxed ">{u.profile}</p>
                                
                                <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold ">Visi</h3>
                                <p className="mx-auto text-base font-normal leading-relaxed ">{u.vision}</p>
                                <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold ">Kegiatan Unggulan</h3>
                                {u.activities.map(a =>(
                                    <>
                                                {/* <h4 className="mx-auto mt-4 text-xl font-normal ">{a.title}</h4> */}
                                        <ul className="list-disc">
                                            <li className="font-semibold">{a.title}</li>
                                        </ul>
                                        <p className="mx-auto mb-4 text-base font-normal leading-relaxed">{a.desc}</p>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                <Gallery />  
                </section>
                : null
                )}
        </>

    
    )
}

export default Item


