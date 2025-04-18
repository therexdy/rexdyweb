import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const NavBar = () => {
    return (
    <nav className="bg-white text-black dark:bg-black dark:text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold hover:text-text-rexdy-green">
            <Link to="/rexdyweb" className="text-2xl hover:text-rexdy-green">Rexdy</Link>
          </div>
          <div className="md:flex space-x-6">
            <Link to="/Projects" className="hover:text-text-rexdy-green hidden lg:block">Projects</Link>
            <Link to="/Socials" className="hover:text-text-rexdy-green hidden lg:block">Social Links</Link>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
