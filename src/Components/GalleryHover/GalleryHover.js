import React, { useContext } from 'react'
import HoverItem from './HoverItem'
import './GalleryHover.css'
import orkidehData from '../../Context/Context'

export default function GalleryHover() {
    const contextData = useContext(orkidehData)


    return (
        <div className="GalleryContainer">
            {
                contextData.srcImgData.map((item, index) => (
                    <HoverItem key={index} src={item} />
                ))
            }

        </div>
    )
}

