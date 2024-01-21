import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcons=[
  {src:'/assets/icons/search.svg',alt:'search'},
  {src:'/assets/icons/black-heart.svg',alt:'heart'},
  {src:'/assets/icons/user.svg',alt:'user'}
]

const Navbar = () => {
  return (
    <header className='w-full pb-10 pt-5' >
      <nav className="nav">
        
         <Image 
         src="/assets/icons/logo.svg" width={42} height={42} alt="logo" />
         <p className="nav-logo" >
          {/* Price<span className="text-[#3771b0]">Watch</span> */}
          PriceWatch
         </p>
        <div className="flex items-center gap-5">
          <button type="button" className="searchbar-btn">Login</button>
         {navIcons.map((icon)=>(
          <Image
          key={icon.alt}
          src={icon.src}
          alt={icon.alt}
          width={30}
          height={30}
          className="object-contain"
          />
         ))}
        </div>
         
      </nav>
    </header>
  )
}

export default Navbar