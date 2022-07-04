import React from 'react'
import oyo from './images/oyo.png'
import adobe from './images/adobe.png'
import amazon from './images/amazon.jpg'
import facebook from './images/facebook.jpg'
import expedia from './images/expedia.png'
import walmart from './images/walmart.png'
import google from './images/google.png'
import microsoft from './images/microsoft.png'
import samsung from './images/samsung.png'


const Placement = () => {
    return (
        <div>
            <section>
                <div className="section">

                    <div className="header_ header placement">

                        <div className=""><h2>
                            Our Students Are Placed At
                        </h2>
                        </div>

                    </div>
                    <div className="center">
                        <div className="inline-block">
                            <div className="placement">
                                <div className="content">
                                    <div className="headingInfo ">
                                        <img src={adobe} className='imgDetails' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <div className="placement">
                                <div className="content">
                                    <div className="headingInfo ">
                                        <img src={amazon} className='imgDetails' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <div className="placement">
                                <div className="content">
                                    <div className="headingInfo ">
                                        <img src={facebook} className='imgDetails' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <div className="placement">
                                <div className="content">
                                    <div className="headingInfo ">
                                        <img src={walmart} className='imgDetails' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <div className="placement">
                                <div className="content">
                                    <div className="headingInfo ">
                                        <img src={expedia} className='imgDetails' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <div className="placement">
                                <div className="content">
                                    <div className="headingInfo ">
                                        <img src={google} className='imgDetails' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <div className="placement">
                                <div className="content">
                                    <div className="headingInfo ">
                                        <img src={oyo} className='imgDetails' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <div className="placement">
                                <div className="content">
                                    <div className="headingInfo ">
                                        <img src={microsoft} className='imgDetails' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center samsung">
                            <div className="placement samsung">
                                <div className="content samsung">
                                    <div className="headingInfo samsung">
                                        <img src={samsung} className='imgDetails samsung' alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Placement
