import React from 'react'
import { Link } from 'react-router-dom'

const HeroTwo = () => {
    return (
        <div className="hero-section h-[70vh]">
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                        <div className="hero-content">
                            <div className="!text-[#fff]" data-animation="fade-down" >
                                <p className="!text-[#fff]">Welcome to
                                    
                                    Indian Institute of Creative Skills
                                </p>
                            </div>
                            <h2 data-animation="flip-up" data-delay={0.3} className='!text-[#fff]'><span className='!text-[#ffd700]'></span><span className='!text-[#ffd700]'> Made for Media, Built for Success</span></h2>
                            {/* <div className="text-generator-box" data-animation="fade-down" >
                                <h3>What is your request or topic?</h3>
                                <div className="searchwrapper">
                                    <div className="searchbox">
                                        <div className="row align-items-center">
                                            <div className="col-md-9">
                                                <form>
                                                    <input type="text" className="form-control" placeholder="What is your request or topic?" /></form></div>
                                            <div className="col-xl-3">
                                                <form>
                                                    <button className="btn" type="submit">Generate</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="short-prompt" data-animation="fade-zoom-in">
                                <ul>
                                 
                                    <li><Link >Entrepreneurship Focused</Link></li>
                                    <li><Link >International Exposure</Link></li>
                                    <li className='mt-[35px]'><Link >Assured Apprenticeship of INR 35-50K</Link></li>
                                </ul>
                            </div>
                            <Link to="#" className="default-btn !text-[#000] !bg-[#ffd700] mt-[35px]"><span>Apply Now</span> <i className="bx bx-chevron-right" /></Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="hero-image" data-animation="fade-up" >
                        <p>form</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeroTwo