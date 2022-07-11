import React, { useState } from 'react'

export default function DetailImage({images}) {
  return (
    <div>
          {images === undefined ? (
            <div className='grid grid-cols-3 gap-10 mt-10' style={{maxWidth: 512, width:"100%", 
            maxHeight: 328, marginLeft: 703,
            top: 436}}>
              <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
              <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
              <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
              <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
              <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
              <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
            </div>
            
          ) : (
            <div className='grid grid-cols-3 gap-10 mt-10' style={{maxWidth: 512, width:"100%", 
            maxHeight: 328, marginLeft: 703,
            top: 436}}>
            {images[0] ? (
              <img src={images[0].image_url} alt="image" className='w-36 h-36 object-cover' />
              ) : (
              <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
              )}
            {images[1] ? (
              <img src={images[1].image_url} alt="image" className='w-36 h-36 object-cover' />
              ) : (
                <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
                )}
            {images[2] ? (
              <img src={images[2].image_url} alt="image" className='w-36 h-36 object-cover' />
            ) : (
              <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
              )}
            {images[3] ? (
              <img src={images[3].image_url} alt="image" className='w-36 h-36 object-cover' />
              ) : (
                <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
                )}
            {images[4] ? (
              <img src={images[4].image_url} alt="image" className='w-36 h-36 object-cover' />
              ) : (
                <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
                )}
            {images[5] ? (
              <img src={images[5].image_url} alt="image" className='w-36 h-36 object-cover' />
              ) : (
                <img src="/default-images-null.svg" alt="image" className='w-36 h-36 object-cover' />
                )}
            </div>
          )}      
    </div>
  )
}
