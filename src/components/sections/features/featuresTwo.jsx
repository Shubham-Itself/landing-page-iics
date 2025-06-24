import { featuresData } from '@/db/featuresData'
import React from 'react'
import FeatureCard from './featureCard'

const FeaturesTwo = () => {
    return (
        <div className="features-section ptb-100" id='programContainer'>
            <div className="container">
                <div className="section-title" data-animation="fade-down" >
                    <div className="sub-title">
                        <p>Your Future Starts Now</p>
                    </div>
                    <h2>Discover IICS’s Untapped Career Goldmine</h2>
                </div>
                <div className="row">
                    {
                        featuresData.map((feature, index) => (
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

export default FeaturesTwo