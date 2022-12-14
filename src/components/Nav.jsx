import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex items-center justify-between mb-12 py-10">
      <h1 className="text-xl font-bold uppercase  text-teal-600  dark:text-teal-400 font-md">
        tajwar
      </h1>
      <ul className="flex justify-between items-center gap-5">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-dark dark:text-white"
          />
        </li>
        <li>
          <a
            href="https://resume-abid.netlify.app"
            target={'_blank'}
            className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md border-none outline-none"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
