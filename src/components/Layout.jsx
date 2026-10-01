import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout() {
  return (
    <div className="app-shell">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
