import React from 'react';
import "./contact.css"

export default function Contact() {
    return (
        <>
            <div className='container pt-3'>
                <div className='contact'>
                    <div className='text-center pt-4'>
                        <h2 className='text-uppercase fs-1 fw-bold'>CONATCT SECTION</h2>
                        <div className='d-flex justify-content-center align-items-center mb-3 pt-4'>
                            <div className='line me-3 bg-dark'></div>
                            <i className='fa-solid fa-star'></i>
                            <div className='line ms-3 bg-dark'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='100vh'>
                <div className='container'>
                    <div className="  w-50 m-auto shadow p-3">
                        <input type="text" className="form-control m-3 border-top-0" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        <input type="number" className="form-control m-3  border-top-0" placeholder="UserAge" aria-label="Username" aria-describedby="addon-wrapping" />
                        <input type="email" className="form-control m-3  border-top-0" placeholder="UserEmail" aria-label="Username" aria-describedby="addon-wrapping" />
                        <input type="password" className="form-control m-3  border-top-0" placeholder="UserPassword" aria-label="Username" aria-describedby="addon-wrapping" />

                        <button class="btn btn-primary my-2">Send Message</button>
                    </div>
                </div>

            </div>


        </>
    )
}
