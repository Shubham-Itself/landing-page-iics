import BlogSidebar from '@/components/sections/blogs/blogSidebar'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import Pagination from '@/components/ui/pagination'
import { blogData } from '@/db/blogData'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogStandard = () => {
    return (
        <>
            <PageHeader
                className={"sbg-6"}
                currentPage={"Blog Standard"}
                title={"Blog Standard"}
            />
            <div className="blog-standard-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="blog-stand-card">
                                <div className="row">
                                    {
                                        blogData.slice(0, 3).map(({ id, imageSrcBig, publishDate, readTime, title, description }) => (
                                            <div key={id} className="col-xl-12">
                                                <div className="blog-card standard">
                                                    <div className="blog-img">
                                                        <Link to="/blog-details">
                                                            <img src={imageSrcBig} alt="Image" />
                                                        </Link>
                                                        <ul className="blog-metainfo">
                                                            <li><i className="bx bx-calendar" /> <Link to="/blog">{publishDate}</Link></li>
                                                            <li><i className="bx bx-time" />{readTime}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="blog-info">
                                                        <h3><Link to="/blog-details">{title}</Link></h3>
                                                        <p>{description}</p>
                                                        <Link to="/blog-details" className="btn-link">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="blog-pagi">
                                        <Pagination />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <InstagramGallery />
        </>
    )
}

export default BlogStandard