import React from 'react'

const Footer = () => {
  return (
    <footer className='flex w-full justify-start items-center bg-fsblack text-white space-x-4 border-t border-[#222222] px-6'><div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Formula Studio™. All Rights Reserved.
  </span>
  <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
          <a href="https://chromewebstore.google.com/detail/the-formula-button/kippcmdklcbfedimbifbdkkemfcejcna" className="hover:underline me-4 md:me-6">The Formula Button</a>
      </li>
      <li>
          <a href="/privacyPolicy" className="hover:underline me-4 md:me-6">Privacy</a>
      </li>
  </ul>
  </div></footer>
  )
}

export default Footer