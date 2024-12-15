import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import DarkModeToggle from '../ui/DarkModeToggle';
import clsx from 'clsx';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://img.freepik.com/premium-vector/modern-l-letter-logo-vector_724449-55.jpg"
            className="h-8"
            alt="LRTS Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LRTS दिल्ली
          </span>
          <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                DEMO
              </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/zones" isActive={isActive('/zones')}>Zones</NavLink>
            </li>
            <li>
              <NavLink to="/planner" isActive={isActive('/planner')}>Trip Planner</NavLink>
            </li>
            <li>
              <NavLink to="/passes" isActive={isActive('/passes')}>Passes</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => (
  <Link
    to={to}
    className={clsx(
      'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
      isActive
        ? 'bg-primary-700 dark:bg-primary-900 text-white'
        : 'text-primary-black hover:text-white hover:bg-primary-500 dark:hover:bg-primary-700'
    )}
  >
    {children}
  </Link>
);

export default Navbar;
