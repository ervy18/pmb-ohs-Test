import React from 'react'
import Gallery from '../../components/Gallery'
import Item from '../../components/Item'

import {DATA} from "../../data"

const Single = (props) => {
    return (
        <>
         <Item {...props} data={DATA} />
        </>
    )
}

export default Single
