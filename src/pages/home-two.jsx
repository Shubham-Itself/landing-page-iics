import AboutTwo from '@/components/sections/about/aboutTwo'
import BlogTwo from '@/components/sections/blogs/blogTwo'
import BrandTwo from '@/components/sections/brands/brandTwo'
import FeaturesTwo from '@/components/sections/features/featuresTwo'
import HeroTwo from '@/components/sections/heros/heroTwo'
import TestimonialTwo from '@/components/sections/testimonial/testimonialTwo'
import TextAnimationSmall from '@/components/sections/textAnimations/textAnimationSmall'
import VideoSection from '@/components/sections/videoSection'
import React from 'react'
import Faq from './faq'
import FaqSection from '@/components/sections/faqSection'
import FeatureCampus from '@/components/sections/features/featureCampus'

const HomeTwo = () => {
    return (
        <>
            <HeroTwo />
            {/* <BrandTwo/> */}
            <FeaturesTwo/>
            <TextAnimationSmall/>
            <AboutTwo/>
            <VideoSection className={"vid-bg-2"}/>
            <TestimonialTwo/>
            <BlogTwo/>
            <FaqSection/>
            <FeatureCampus/>
        </>
    )
}

export default HomeTwo