import React, { useContext } from 'react'
import HoverItem from './HoverItem'
import './GalleryHover.css'
import orkidehData from '../../Context/Context'

export default function GalleryHover() {
    const contextData = useContext(orkidehData)
    console.log(contextData.srcImgData);


    return (
        <div className="GalleryContainer">
            {
                contextData.srcImgData.map(item => (
                    <HoverItem src={item}/>
                ))
            }

        </div>
    )
}

