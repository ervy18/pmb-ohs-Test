import { Link } from "react-router-dom"

const Unit = (props) => {
    const {data} = props
    return (
      <>
          <div className="flex flex-wrap justify-center mx-20  ">
          {data.map(u =>(
            <div className="flex shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer my-10 mx-5 p-4 transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
              <Link to={`/unit/${u.slug}`} className="w-full block h-full">
                <img alt="blog photo" src={`/logo/${u.logo}`} className="max-h-60 w-full object-cover"/>
                <div className="w-full">
                  {/* <p className="text-primary-focus text-md font-medium">
                      Article
                  </p> */}
                  <p className=" dark:text-white text-xl font-medium mb-2">
                    {u.title}
                  </p>
                  {/* <p className="text-gray-600 dark:text-gray-300 font-light text-md truncate overflow-ellipsis">
                    {u.desc}
                  </p> */}
                </div>
              </Link>
            </div> 
          ))}
        </div>
      </>
    )
}

export default Unit


{/* <div className="text-gray-600 body-font">
<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      <br className="hidden lg:inline-block">readymade gluten
    </h1>
    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    <div className="flex justify-center">
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
    </div>
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
  </div>
</div>
</div> */}