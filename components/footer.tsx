import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
     <section>
    <div className='l'>
           <Image
            src="/assets/images/footer.jpg"
            alt="icons"
             width={120}
             height={120}
             /*className='l' */
            />
            </div>
            <p className='l-txt'>@ Copyright 2024 TrackWatch</p>
            </section>
    </>
  )
}

export default Footer