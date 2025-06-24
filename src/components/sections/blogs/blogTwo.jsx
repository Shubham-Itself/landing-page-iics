import { blogDataTwo } from '@/db/blogData'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogTwo = () => {
    return (
        <div className="blog-section pt-100 pb-70" id='admissionContainer'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-content" data-animation="fade-down" >
                            <div className="sub-title">
                                <p>Admission Process</p>
                            </div>
                            <h2>Your gateway to IICS begins here</h2>
                            <p>The IICS admission journey is designed to discover talent, passion, and creative potential. With just four focused steps, we help you transition from a curious learner to a future-ready creator.</p>
                            <Link to="#" className="default-btn !text-[#000] !bg-[#ffd700] mt-[35px]"><span>Apply Now</span> <i className="bx bx-chevron-right" /></Link>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        {blogDataTwo.map((post) => (
                            <div key={post.id} className="blog-content" data-animation="fade-right" >
                                <div className="row">
                                    <div className="col-xl-3 col-sm-3">
                                        <div className="blog-date">
                                            <h4>{post.readTime}</h4>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-sm-9">
                                        <div className="blog-title">
                                            <h2>
                                                <Link to={"/blog-details"}>{post.title}</Link>
                                            </h2>
                                            <p>{post.description}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogTwo