import React from 'react';
import startPage from "../Images/avataaars.svg";
import "./start.css";

export default function StartFramWork() {
    return (
        <>
            <div className='home d-flex justify-content-center align-items-center text-white '>
                <div className='text-center'>
                    <img src={startPage} className='img-fluid mb-3 w-50 ' alt='' />
                    <div>
                        <div className='content text-center pt-4 color-white ' >
                            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>START FRAMEWORK</h2>
                            <div className=' d-flex justify-content-center align-items-center mb-5 '>
                                <div className='line me-3'></div>
                                <i className='fa-solid fa-star '></i>
                                <div className='line ms-3 '></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white mb-2 pb-5">Graphic Artist - Web Designer - Illustrator</div>
                </div>
            </div>
        </>
    )
}
