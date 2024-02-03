import React from 'react';
import "./portfolio.css"
import img1 from "../Images/poert1.png";
import img2 from "../Images/port2.png";
import img3 from "../Images/port3.png";

export default function Portfolio() {




    return (
        <>


            <div className='container pt-3'>
                <div className='contact'>
                    <div className='text-center pt-4'>
                        <h2 className='text-uppercase fs-1 fw-bold'>PORTFOLIO COMPONENT</h2>
                        <div className='d-flex justify-content-center align-items-center mb-3 pt-4'>
                            <div className='line me-3 bg-dark'></div>
                            <i className='fa-solid fa-star'></i>
                            <div className='line ms-3 bg-dark'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container m-4">
                <div className='row g-3'>
                    <div className='col-md-4'>
                        <div className='item image position-relative rounded-3 overflow-hidden'>
                            <img src={img1} className='w-100 rounded-3' alt='' />
                            <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center  '>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item image position-relative rounded-3 overflow-hidden'>
                            <img src={img2} className='w-100 rounded-3' alt='' />
                            <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center  '>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item image position-relative rounded-3 overflow-hidden'>
                            <img src={img3} className='w-100 rounded-3' alt='' />
                            <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center  '>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item image position-relative rounded-3 overflow-hidden'>
                            <img src={img1} className='w-100 rounded-3' alt='' />
                            <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center  '>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item image position-relative rounded-3 overflow-hidden'>
                            <img src={img2} className='w-100 rounded-3' alt='' />
                            <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center  '>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item image position-relative rounded-3 overflow-hidden'>
                            <img src={img3} className='w-100 rounded-3' alt='' />
                            <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center  '>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>


                </div>
            </div>




        </>
    )
}
