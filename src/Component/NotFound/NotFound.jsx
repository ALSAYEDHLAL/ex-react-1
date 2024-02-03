import React from 'react'

import NotFoundPic from '../../Component/Images/NotFound.jpg';

export default function NotFound() {
    return (
        <>
            <div>
                <img src={NotFoundPic} className='w-100' alt='' />
            </div>
        </>
    )
}
