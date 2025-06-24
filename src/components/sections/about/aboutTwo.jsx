import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const AboutTwo = () => {
    useEffect(() => {
        let counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let counter = entry.target;
                    let target = parseInt(counter.innerText);
                    let step = target / 200;
                    let current = 0;
                    let timer = setInterval(function () {
                        current += step;
                        counter.innerText = Math.floor(current);
                        if (parseInt(counter.innerText) >= target) {
                            clearInterval(timer);
                        }
                    }, 10);
                    counterObserver.unobserve(counter);
                }
            });
        });

        let counters = document.querySelectorAll(".counter-num");
        counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }, [])
    return (
        <div className="about-section-2" id='aboutContainer'>
            <div className="container">
                <div className="about-1">
                    <div className="row align-items-top">
                        <div className="col-xl-6 col-md-7">
                            <div className="img-wrapper">
                                <div className="img-box" data-animation="fade-up" >
                                    <img className="image-box-item" src="/img/all-img/about-5.png" alt="image" />
                                    <img className="image-box-item" src="/img/all-img/about-7.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-5">
                            <div className="about-content-2" data-animation="fade-down" >
                                <div className="sub-title-1">
                                    <p>About Us</p>
                                </div>
                                <h2>Indian Institute of Creative Skills</h2>
                                <p>India’s first creative incubator dedicated to nurturing the next generation of entrepreneurs in the Media and Entertainment industry.</p>
                                {/* <Link className="default-btn" to="/about"> <span>About Us</span> <i className="bx bx-chevron-right" /></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-2">
                    <div className="row">
                        <div className="col-xl-6 col-md-5">
                            <div className="about-content-2" data-animation="fade-down" >
                                <div className="counter">
                                    <p className='font-bold !mb-[5px]'>Launchpad for Creative Careers</p>
                                    <p>IICS empowers individuals to become globally benchmarked creators, innovators, and industry leaders.</p>
                                    <p className='font-bold !mb-[5px]'>Real-World Training for Industry-Ready Creators</p>
                                    <p>Students learn through real-world projects, international events, and expert mentorship</p>
                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-lg-4 col-sm-4 col-md-6 col-6">
                                            <div className="counter-content">
                                                <h2><span className="counter-num">7</span>+</h2>
                                                <p>Entreprenuership Focused Program</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-4 col-md-6 col-6">
                                            <div className="counter-content">
                                                <h2><span className="counter-num">100</span>+</h2>
                                                <p>Industry Experts</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-4 col-md-6 col-6">
                                            <div className="counter-content">
                                                <h2><span className="counter-num">20</span>K</h2>
                                                <p>Global Opportunities</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-7">
                            <div className="img-wrapper part-1">
                                <div className="img-box part-1" data-animation="fade-up" >
                                    <img className="image-box-item" src="/img/all-img/about-4.png" alt="image" />
                                    <img className="image-box-item" src="/img/all-img/about-6.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutTwo