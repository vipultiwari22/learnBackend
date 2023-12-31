import React from 'react'
import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'
function Icon({ name }) {

    if (name == 'circal') {
        return <FaRegCircle />
    } else if (name == 'cross') {
        return <FaTimes />
    } else {
        return <FaPen />
    }

}

export default Icon