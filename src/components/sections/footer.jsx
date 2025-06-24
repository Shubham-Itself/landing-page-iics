import React from 'react'
import { Link } from 'react-router-dom'
import FooterTopInfo from './footerTopInfo'

const Footer = () => {
  return (
    <div className="footer-area">
      {/* <FooterTopInfo /> */}
      <div className="footer-widget-info ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div className="subscribe-area">
             <div className='py-[10px] bg-white w-fit'>
             <img src="public/img/IICS/iics_image/main-logo-iics.png" className='w-[250px]' alt="" />
             </div>
                <p className='text-white !mt-[20px]'>The Indian Institute of Creative Skills (IICS), affiliated with NSDC Academy and operated by MESC (funded by NSDC) under MSDE, is dedicated to shaping the future of creative education.</p>
                {/* <div className="subscribe-wrapper">
                  <div className="subscribe-box">
                    <form data-toggle="validator">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <input type="text" className="form-control" placeholder="Your email address @" name="EMAIL" required autoComplete="off" />
                        </div>
                        <div className="col-lg-4">
                          <button type="submit" className="btn">Subscribe</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
              <div className="footer-widget">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Enquire Now</Link></li>
                  <li><Link to="/about">Programs</Link></li>
                  <li><Link to="/gallery">Admission</Link></li>
                  <li><Link to="/portfolio">Life@IICS</Link></li>
                  <li><Link to="/team">Creative Incubator</Link></li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-4">
              <div className="footer-widget">
                <h4>Campus</h4>
                <ul>
                  <li ><Link to="/blog" className='!text-white'><span className='font-semibold !mb-[10px] text-white'>Delhi Campus</span>
                  <span className='text-white'>
                  13-A, 3rd Floor, Above Tata Motors Showroom, Main Ring Road, Lajpat Nagar-4, New Delhi- 110024
                  </span>
                  </Link></li>
                  <li ><Link to="/blog" className='!text-white'><span className='font-semibold !mb-[10px] text-white'>Bhopal Campus</span>
                  <span className='text-white'>
                  Jagran Lakecity University, Mugaliyachap, Near Ratibad Bhopal – 462044
                  </span>
                  </Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-4">
              <div className="footer-widget">
                <h4 className='invisible'>Office</h4>
                <ul>
                  <li ><Link to="/blog" className='!text-white'><span className='font-semibold !mb-[10px] text-white'>Chandigarh Campus</span>
                  <span className='text-white'>
                  CH Devi Lal Centre of Learning Plot No 5, Sec 28 B,
                  Madhya Marg, Chandigarh, India
                  </span>
                  </Link></li>
                  <li ><Link to="/blog" className='!text-white'><span className='font-semibold !mb-[10px] text-white'>Kolkata Campus</span>
                  <span className='text-white'>
                  Coming Soon
                  </span>
                  </Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="cpr-left">
                <p className='!text-white'>Copyright© 2025. All rights reserved.</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cpr-right">
                <ul>
                  <li ><Link className='!text-white'>+91 959-4949-959</Link></li>
                  <li><Link className='!text-white'>info@iicsindia.org</Link></li>
               
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer