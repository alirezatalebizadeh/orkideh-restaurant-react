import React from 'react'
import StillUser from '../../Components/StillUser/StillUser'
import './StillPage.css'
import SignUpSkill from '../../Components/StillUser/SignUp/SignUpSkill'
export default function StillPage() {
    return (
        <div className='stillPage'>
            <StillUser />
            <SignUpSkill />
        </div>
    )
}
