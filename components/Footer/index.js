import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
      <>
        <div className={`${styles.footer} flex justify-center border-y`}>
            <div className={`${styles.footerLeft} flex justify-end border-r w-1/2`}>
                    <div className={`${styles.containerLogo}`}>
                        <Link href="/">
                            <h1 className={`${styles.logo} font-semibold text-2xl hover:cursor-pointer`}>Officity</h1>
                        </Link>
                        <p>Pay One Simple Price For Everything Related To Your Workspace</p>
                    </div>
            </div>
            <div className="flex w-1/2">
                <div className={`${styles.containerInformation} flex gap-16`}>
                    <div className='w-[106px] h-[102px]'>
                        <h1 className="h-5 mb-5 text-blue">Services</h1>
                        <Link href="#EmailMarketing">
                            <a className='inline-block mb-5 text-sm'>Email Marketing</a>
                        </Link>
                        <Link href="#ContactUs">
                            <a className='inline-block mb-5 text-sm'>Contact Us</a>
                        </Link>
                    </div>
                    <div className='w-[65px] h-[102px]'>
                        <h1 className="h-5 mb-5 text-blue">About</h1>
                        <Link href="#OurStory">
                            <a className='inline-block mb-5 text-sm'>Our Story</a>
                        </Link>
                        <Link href="#Careers">
                            <a className='inline-block mb-5 text-sm'>Careers</a>
                        </Link>
                    </div>
                    <div className='w-[140px] h-[112px]'>
                        <h1 className="h-5 text-blue">Download Our App</h1>
                        <Link href="#OurStory">
                            <a>
                                <img src="/google-play.svg" alt="google play"/>
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Link href="#facebook">
                            <a className=''><img src="/facebook.svg" alt="facebook"/></a>
                        </Link>
                        <Link href="#twitter">
                            <a className=''><img src="/twitter.svg" alt="twitter"/></a>
                        </Link>
                        <Link href="#instagram">
                            <a className=''><img src="/instagram.svg" alt="instagram"/></a>
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
