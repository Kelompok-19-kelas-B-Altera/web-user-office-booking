import React from 'react'
import styles from './Footer.module.css';

export default function Footer() {
  return (
      <>
        <div className={`${styles.footer} grid grid-cols-2 border-y`}>
            <div className={`${styles.footerLeft} grid grid-cols-2 items-center justify-items-center border-r`}>
                <h1 className={`${styles.logo} font-semibold text-2xl text-blue`}>Officity</h1>
                <p>Pay One Simple Price For Everything Related To Your Workspace</p>
            </div>
            <div className="grid grid-cols-3 items-center justify-items-center">
                <div className="grid grid-rows-3">
                    <h1 className="h-5 mb-5 text-lg text-blue">Service</h1>
                    <a href="">Contact Us</a>
                    <a href="">Email Marketing</a>
                </div>
                <div className="grid grid-rows-3">
                    <h1 className="h-5 mb-5 text-lg text-blue">About</h1>
                    <a href="">Our Story</a>
                    <a href="">Careers</a>
                </div>
                <div className="grid grid-rows-3">
                    <h1 className="h-5 mb-5 text-lg text-blue">Follow Us</h1>
                </div>
            </div>
        </div>
        <div className={`${styles.copyright} text-center opacity-50`}>
            <p>Copyright © 2020. All rights reserved.</p>
        </div>
      </>
  )
}