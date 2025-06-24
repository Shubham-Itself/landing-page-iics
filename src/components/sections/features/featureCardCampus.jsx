import React from 'react'

const FeatureCardCampus = ({ feature, index }) => {
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
   

</div>
  )
}

export default FeatureCardCampus
