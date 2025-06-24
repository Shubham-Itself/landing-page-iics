import { campusData } from '@/db/campusData'
import React from 'react'
import FeatureCard from './featureCard'

const FeatureCampus = () => {
  return (
    <div className="features-section ptb-100">
            <div className="container">
                <div className="section-title" data-animation="fade-down" >
                    <div className="sub-title">
                        <p>Our Campuses</p>
                    </div>
                    <h2>State of the Art Facilities Across India</h2>
                </div>
                <div className="row">
                    {
                        campusData.map((feature, index) => (
                            <div key={feature.id} className="col-xl-3 col-lg-6 col-sm-6">
                                <FeatureCard feature={feature} index={index} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
  )
}

export default FeatureCampus
