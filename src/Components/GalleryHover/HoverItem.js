import React from 'react'
import './HoverItem.css'









export default function HoverItem(props) {

    return (
        <div className='itemHover hovereffect'>
            <img className="img-responsive" src={props.src} alt="img" />
            <div className="overlay">
                <h2>Hover effect 1v2</h2>
                <p>لذت واقعی غذا در محیطی دلنشین</p>
            </div>
        </div>
    )
}
