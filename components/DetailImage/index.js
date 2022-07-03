import React, { useState } from 'react'

export default function DetailImage({images}) {
  // const images = [];
  const [defaultImage, setDefaultImage ] = useState ([
    '/default-images-null.svg',
    '/default-images-null.svg',
    '/default-images-null.svg',
    '/default-images-null.svg',
    '/default-images-null.svg',
    '/default-images-null.svg',
  ])
  if (images?.length > 0) {
    setDefaultImage(images?.map(image => image.image_url))
  } 
  return (
    <div className='grid grid-cols-3 gap-10 mt-10' style={{maxWidth: 512, width:"100%", 
        maxHeight: 328, marginLeft: 703,
        top: 436}}>
          {defaultImage?.map((image, index) => (
            <img src={image} alt="detail-image" width={256} height={128} key={index} />
          ))}
          {/* {images?.length === 0 && (
            <img src={defaultImage} alt="detail-image" width={256} height={128} />
          )} */}
    </div>
  )
}
