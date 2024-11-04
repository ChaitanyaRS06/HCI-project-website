import { Outlet, Link } from "react-router-dom";
import ButtonLink from '../components/ButtonLink';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <h1>Printing something in layout</h1>
          <li>
            <ButtonLink to="/darkmode">Dark Mode</ButtonLink>
          </li>
          <li>
            <ButtonLink to="/lightmode">Light Mode</ButtonLink>
          </li>
          <li>
            <ButtonLink to="/reminderdarkmode">Reminder Dark Mode</ButtonLink>
          </li>
          <li>
            <ButtonLink to="/reminderlightmode">Reminder Light Mode</ButtonLink>
          </li>


        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;