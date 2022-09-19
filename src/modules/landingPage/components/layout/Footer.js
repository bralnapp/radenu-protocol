import React from 'react'
import { footerLinks } from 'src/utils/data'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='layout-container pb-8 md:flex md:justify-between items-center'>
      <div className='text-center md:text-left'>
        <div className="font-medium text-xl leading-6 text-[#2E3741] uppercase mb-2">Logo</div>
        <p className="text-sm leading-6 text-[#615C66]">Copyright © {year} Dock Labs, Inc. <br /> All rights reserved.</p>
      </div>
      {/* footer links */}
      <div className='space-x-4 mt-2 text-center'>
        {footerLinks.map((url, index) => (
          <a
            key={index}
            href={url.link}
            className="font-medium text-xl leading-[30px] text-[#2A333D]"
          >
            {url.name}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer