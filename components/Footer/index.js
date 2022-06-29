import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
      <>
        <div className={`${styles.footer} grid grid-cols-2 border-y`}>
            <div className={`${styles.footerLeft} grid grid-cols-2 items-center justify-items-center border-r`}>
                <h1></h1>
                <div>
                    <h1 className={`${styles.logo} font-semibold text-2xl text-blue`}>Officity</h1>
                    <p className="justify-items-center">Pay One Simple Price For Everything Related To Your Workspace</p>
                </div>
            </div>
            <div className="grid grid-cols-3 items-center justify-items-center">
                <div className="grid grid-rows-3">
                    <h1 className="h-5 mb-5 text-lg text-blue">Service</h1>
                    <Link href="#ContactUs">
                        <a>Contact Us</a>
                    </Link>
                    <Link href="#EmailMarketing">Email Marketing</Link>
                </div>
                <div className="grid grid-rows-3">
                    <h1 className="h-5 mb-5 text-lg text-blue">About</h1>
                    <Link href="#OurStory">
                        <a>Our Story</a>
                    </Link>
                    <Link href="#Careers">
                        <a>Careers</a>
                    </Link>
                </div>
                <div className="grid grid-rows-3 gap-5">
                        <Link href="#facebook" className="w-5 h-4 ">
                            <a><img src="/facebook.svg" alt=""/></a>
                        </Link>
                        <Link href="#twitter" className="w-5 h-4">
                            <a><img src="/twitter.svg" alt=""/></a>
                        </Link>
                        <Link href="#instagram" className="w-5 h-4">
                            <a><img src="/instagram.svg" alt=""/></a>
                        </Link>
                </div>
            </div>
        </div>
        <div className={`${styles.copyright} text-center opacity-50`}>
            <p>Copyright © 2020. All rights reserved.</p>
        </div>
      </>
  )
}
