import { Outlet } from 'react-router-dom';

import { Footer } from '../footer';
import { Menu } from '../menu';
import { Navbar } from '../navbar';
import './layout.scss';

export const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
