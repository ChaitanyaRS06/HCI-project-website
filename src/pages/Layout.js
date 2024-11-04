import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <h1>Printing something in layout</h1>
          <li>
            <Link to="/darkmode">Dark Mode</Link>
          </li>
          <li>
            <Link to="/lightmode">Light Mode</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;