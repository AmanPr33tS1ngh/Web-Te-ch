import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import Courses from './Courses'
import availOffer from './images/availOffer.png'
import Placement from './Placement'
import Services from './Services'

const Home = () => {
    return (
        <>
            <div>
                <div className="section">
                    <div className="header">
                        <div className="heading"><h4>Chasing Jobs? Not Now. </h4>
                            <h5>We are WebTeach</h5>
                            <h4>Become a Great Developer With Our Courses</h4>
                        </div>
                        <div className="floating_img">
                            <Link to={'/courses'}><img src={availOffer} className="availImg" alt="..." /></Link>
                        </div>
                    </div>
                </div>
                <div className="floating-info">

                    <div className="content">
                        <div className="centerHead">
                            <div className="headingInfo">
                                <h4>
                                    If you have the courage and the commitment to learn coding,

                                </h4>

                            </div></div>

                        <div className="headingInfo"><h4>then <strong>WebTeach </strong> will empower you.</h4></div>
                        <div className="items">
                            <div className="item">
                                <h6> &#x2B22; Instant 1:1 doubt sessions</h6>
                            </div>
                            <div className="item">
                                <h6> &#x2B22; Practical Learning with many problems and 15+ projects in each courses</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Courses />
            <Placement />
            <Services />
            <Contact />
        </>
    )
}

export default Home
