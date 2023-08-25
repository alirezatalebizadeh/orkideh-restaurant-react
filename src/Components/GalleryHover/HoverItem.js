import React from 'react'
import './HoverItem.css'









export default function HoverItem(props) {

    return (
        <div className='itemHover hovereffect'>
            <img className="img-responsive" src={props.src} alt="img" />
            <div className="overlay">
                <h2>رستوران زنجیره ای ارکیده</h2>
                <p>لذت واقعی غذا در محیطی دلنشین</p>
            </div>
        </div>
    )
}
