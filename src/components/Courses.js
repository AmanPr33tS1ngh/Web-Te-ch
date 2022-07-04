import React from 'react'
import dataStructures from './images/datastructures.jpg'
import machineLearning from './images/machinelearning.jpg'
import webDev from './images/webdev.png'

const Courses = () => {
    return (
        <div>
            <div className="section">

                <div className="header_ header courses">

                    <div className="heading"><h2>
                        Explore Courses
                    </h2>
                        <h6>The world's best courses on different technologies. Begin the journey for your dream job with these specializations.
                        </h6>
                    </div>

                </div>
                <div className="center courses"><div className="floating-info --floating">
                    <div className="content">
                        <div className="headingInfo ">
                            <img src={dataStructures} className='imgDetails' alt="" />
                            <h4>Data Structures</h4>
                        </div>
                    </div>
                </div>
                    <div className="floating-info --floating">
                        <div className="content">
                            <div className="headingInfo ">
                                <img src={webDev} className='imgDetails' alt="" />
                                <h4>Web Development</h4>
                            </div>
                        </div>
                    </div>
                    <div className="floating-info --floating">
                        <div className="content">
                            <div className="headingInfo ">

                                <img src={machineLearning} className='imgDetails' alt="" />
                                <h4>Machine Learning</h4>
                            </div>
                        </div>
                    </div></div>

            </div>
        </div>
    )
}

export default Courses
