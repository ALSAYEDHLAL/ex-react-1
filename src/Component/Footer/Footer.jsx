import React from 'react';
import "./style.css"

export default function Footer() {
    return (
        <>
            <div className=' footer-1 '>
                <div className=' p-4  text-center  text-white'>
                    <div className='row '>
                        <div className='col-md-4'>
                            <div className='pt-4 pb-5'>
                                <h3 >LOCATION</h3>
                                <p >2215 John Daniel Drive</p>
                                <p className='pb-4'>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='pt-4 pb-5'>
                                <h3 >AROUND THE WEB</h3>
                                <div className='icons'>
                                    <i className="fa-brands fa-facebook mx-1 icon border p-2 border-white rounded-circle m-auto"></i>
                                    <i className="fa-brands fa-twitter mx-1 icon border p-2 border-white rounded-circle m-auto"></i>
                                    <i className="fa-brands fa-linkedin-in mx-1 icon border p-2 border-white rounded-circle m-auto"></i>
                                    <i className="fa-solid fa-globe mx-1 icon border p-2 border-white rounded-circle m-auto"></i>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='pt-4 pb-5'>
                                <h3 >ABOUT FREELANCER</h3>
                                <p >Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' footer  text-center text-white  py-3'>

                <p >Copyright © Your Website 2021</p>
            </div>
        </>
    )
}
