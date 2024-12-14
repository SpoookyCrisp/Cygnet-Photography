import React from "react";

const Navbar = () => {
    return (
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar w-full bg-white">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 text-black flex-1 px-4 text-xl">Cygnet Photography</div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal text-black">
          {/* Navbar menu content here */}
          <li><a>Home</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Services</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      </div>
      </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
        <li><a>Home</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Services</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </ul>
  </div>
</div>
        )
}

export default Navbar