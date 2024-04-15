import React from 'react'
import './Footer.css'
import RedeemIcon from '@mui/icons-material/Redeem';
import NearMeIcon from '@mui/icons-material/NearMe';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import comment1 from "../../asset/comment1.jpg"
import comment2 from "../../asset/comment2.jpg"
import CopyrightIcon from '@mui/icons-material/Copyright';
import footerImg from "../../asset/footerimg.png"

const Footer = () => {
  return (
    <React.Fragment>
        <div className='Footer container'>
        <div className="Footer-address">
          <div className="Footer-logo logo"><RedeemIcon/>woodmart.</div>
          <p className='Footer-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi saepe reprehenderit placeat modi quae adipisci ipsam ullam vel sed qui.</p>
          <div className='Footer-icon'><NearMeIcon/>451 Wall Street, UK, London</div>
          <div className='Footer-icon'><PhoneAndroidIcon/>Phone: (064)332-1233</div>
          <div className='Footer-icon'><MailIcon/>Fax: (099) 453-1357</div>
        </div>

        <div className="Footer-recent-posts">
          <h3 className='Footer-title'>recent posts</h3>
          <div className="Footer-recent-post">
            <div className='Footer-recent-post1'>
              <img className='Footer-recent-post_img' src={comment1} alt="" />
            </div>
            <div className='Footer-recent-post2'>
              <div className="Footer-recent-post_title">A companiom for extra sleeping</div>
              <div className="Footer-recent-post_date">July 23, 2024 1Comment</div>
            </div>
          </div>

          <div className='gachngang'></div>

          <div className="Footer-recent-post">
            <div className='Footer-recent-post1'>
              <img className='Footer-recent-post_img' src={comment2} alt="" />
            </div>
            <div className='Footer-recent-post2'>
              <div className="Footer-recent-post_title">Outdoor seating collection inspiration</div>
              <div className="Footer-recent-post_date">July 23, 2024 1Comment</div>
            </div>
          </div>
        </div>

        <div className="Footer-our-stores">
          <h3 className='Footer-title'>our stores</h3>
          <div className='mb'>New York</div>
          <div className='mb'>Lon don SF</div>
          <div className='mb'>Cockfosters BP</div>
          <div className='mb'>Los Angeles</div>
          <div className='mb'>Chicago</div>
          <div>Las vegas</div>
        </div>

        <div className="Footer-useful-links">
          <h3 className='Footer-title'>useful links</h3>
          <div className='mb'>Privacy Policy</div>
          <div className='mb'>Returns</div>
          <div className='mb'>Terms & Conditions</div>
          <div className='mb'>Contact US</div>
          <div className='mb'>Latest News</div>
          <div>Our Sitemap</div>
        </div>
        <div className="Footer-menu">
          <div className="text-capitalize">
            <h3 className='Footer-title'>Footer-menu</h3>
              <div className='mb'>Instagram profile</div>
              <div className='mb'>New Collection</div>
              <div className='mb'>Wooman Dress</div>
              <div className='mb'>Contact Us</div>
              <div className='mb'>Latest News</div>
              <div className='italic'>Pruchase Themme</div>
          </div> 
        </div>
      </div>
      <div className="Footer-license" style={{textTransform: "uppercase"}}>
        <div className="Footer-wrapper">
          <div className="Footer-license_text">WOODMART<span className='Footer-license-text-color'><CopyrightIcon/> Craeate by </span> <span className='text-x' style={{color: "#B7695D"}}> X</span>temos studio <span className='Footer-license-text-color'>premium e-commerce solutions</span></div>
          <div className="Footer-license_img">
            <img src={footerImg} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer