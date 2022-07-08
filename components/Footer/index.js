import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
      <>
        <div className={`${styles.footer} grid grid-cols-2 border-y`}>
            <div className={`${styles.footerLeft} flex border-r`}>
                    <div className={`${styles.containerLogo}`}>
                        <h1 className={`${styles.logo} font-semibold text-2xl text-blue`}>Officity</h1>
                        <p>Pay One Simple Price For Everything Related To Your Workspace</p>
                    </div>
            </div>
            <div className="flex">
                <div className={`${styles.containerInformation} flex justify-between items-center`}>
                    <div>
                        <h1 className="block h-5 mb-5 text-lg text-blue">Services</h1>
                        <Link href="#EmailMarketing">
                            <a className='inline-block mb-5'>Email Marketing</a>
                        </Link>
                        <Link href="#ContactUs">
                            <a className='inline-block mb-5'>Contact Us</a>
                        </Link>
                    </div>
                    <div>
                        <h1 className="h-5 mb-5 text-lg text-blue">About</h1>
                        <Link href="#OurStory">
                            <a className='inline-block mb-5'>Our Story</a>
                        </Link>
                        <Link href="#Careers">
                            <a className='inline-block mb-5'>Careers</a>
                        </Link>
                    </div>
                    <div>
                            <Link href="#facebook">
                                <a className='block mb-5 h-4'><img src="/facebook.svg" alt=""/></a>
                            </Link>
                            <Link href="#twitter">
                                <a className='block mb-5  h-4'><img src="/twitter.svg" alt=""/></a>
                            </Link>
                            <Link href="#instagram">
                                <a className='block mb-5  h-4'><img src="/instagram.svg" alt=""/></a>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.copyright} text-center opacity-50`}>
            <p>Copyright © 2020. All rights reserved.</p>
        </div>
      </>
  )
}
