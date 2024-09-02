import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className ='footer' id ='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              {/* <img src={} alt="" /> */}
              <p className='logo'>Logo</p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum ipsa modi officiis numquam nesciunt voluptas id corporis in. Sit nostrum, itaque accusamus dolore quos voluptate doloribus temporibus velit. Ab dicta, quis, facilis modi harum dignissimos reiciendis cupiditate id corporis minima velit adipisci ex quae aperiam cum, nesciunt dolorum vel eligendi quos. Unde, officiis. Rerum voluptatibus, debitis similique deleniti est fuga atque aliquam, aliquid porro illum iure velit, incidunt consectetur tenetur veniam? Facere ipsum neque doloribus possimus quaerat! Alias quo ut, quae magni vel similique ex impedit omnis optio quos quasi dolor, perferendis repudiandae architecto aspernatur, culpa dolorum veniam esse?
              </p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+880 1776575555</li>
                    <li>footdel@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ fooddelv.com - All Right Reserved</p>
      
    </div>
  )
}

export default Footer
