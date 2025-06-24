import React from 'react'

const FeatureCard = ({ feature, index }) => {
    return (
        <div
            className="feature-box"
            data-animation="fade-up"
            data-delay={index * 0.1}
        >
            <span>{feature.email}</span>
            <span className='!top-[50px]'>{feature.courseType}</span>
            
            <div className="icon">
                <img src={feature.icon} alt="" />
            </div>
            <h6>{feature.title}</h6>
            <p>{feature.description}</p>
            <p className='!mb-[5px]'><strong >Degree Offered By:</strong> Jain Online</p>
            <p><strong >Batch Start Date:</strong> 31st July 2025</p>

        </div>
    )
}

export default FeatureCard