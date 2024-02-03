import React from 'react'
import "./about.css"

export default function About() {
    return (
        <>

            <app-about >
                <div className='about text-black d-flex d-flex justify-content-center align-items-center   '>
                    <div>
                        <app-star>
                            <div className='text-center pt-4'>
                                <h2 className='text-uppercase mb-3 fs-1 fw-bolder pt-5'>ABOUT COMPONENT</h2>
                                <div className='d-flex d-flex justify-content-center align-items-center text-white pb-4'>
                                    <div className='line me-3 bg-white'></div>
                                    <i className="fa-solid fa-star"></i>
                                    <div className='line ms-3 bg-white'></div>
                                </div>
                            </div>
                        </app-star>
                        <div className='container-'>
                            <div className='row px-5 pt-5 pb-5'>
                                <div className='col-md-6 ps-md-5'>
                                    <p>
                                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                    </p>
                                </div>
                                <div className='col-md-6 pe-5 '>
                                    <p>
                                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </app-about>
        </>
    )
}
