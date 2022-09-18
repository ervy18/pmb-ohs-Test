import React from 'react'

import Heroes from '../../components/Heroes'
import Item from '../../components/Item'
import Unit from '../../components/Unit'

import {DATA} from "../../data"

const Home = (props) => {

    return (
        <div className="home flex flex-col overflow-y-hidden overflow-x-hidden items-center">
            <Heroes {...props} />
            <Unit {...props} data={DATA} />
            {/* <Item /> */}
            
        </div>
    )
}

export default Home
