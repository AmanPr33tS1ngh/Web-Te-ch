import React from 'react'

import onlineTeaching from './images/onlineTeaching.png'
import facebook from './images/facebook1.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'



const Footer = () => {
  return (
    <div>
      <div className="sectionFooter">
        <div className="header footer d-flex flex-wrap justify-content-between align items center  py-3">
          <div className="footer_">
            <div className="footerImg"><img src={onlineTeaching} className='teachImg footer' alt="..." />
            </div>
            <div className="headingFooter">&#169;	2022 WebTeach Co.</div></div>
          <div className="list footer">
            <li><a href="https://www.instagram.com/aman_._pr33t/" rel='noreferrer' target='_blank'><img className='imgFooter facebook' src={facebook} alt=".." /></a></li>
            <li><a href="https://www.instagram.com/aman_._pr33t/" rel='noreferrer' target='_blank'><img className='imgFooter instagram' src={instagram} alt=".." /></a></li>
            <li><a href="https://www.instagram.com/aman_._pr33t/" rel='noreferrer' target='_blank'><img className='imgFooter twitter' src={twitter} alt=".." /></a></li>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
