import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div className="app">
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <strong>Footer</strong>
        <Link to="/">Home</Link>
      </footer>
    </div>
  );
};

export default Layout;
