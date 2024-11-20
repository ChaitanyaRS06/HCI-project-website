import { Outlet, Link } from "react-router-dom";
import ButtonLink from '../components/ButtonLink';
import "../styles/Layout.css"

const Layout = () => {
  return (
    <div class="layout">
      <nav>
        <div class="site">
            <h1>Eye Strain Website</h1>
            <p>Welcome to our eye strain website! Thank you for your time and willingess to participate in our study. Below are links that will take you to some webpages that have different styling. After completing the task on each webpage, we will ask you to fill out a short survey. At the end after visiting all four webpages, we will ask you to fill out another short survey to conclude the study.</p>
            <ul class="ul-block">
                <li><ButtonLink to="/lightmode">Light Mode</ButtonLink></li>
                <li><ButtonLink to="/darkmode">Dark Mode</ButtonLink></li>
                <li><ButtonLink to="/reminderlightmode">Reminder Light Mode</ButtonLink></li>
                <li><ButtonLink to="/reminderdarkmode">Reminder Dark Mode</ButtonLink></li>
            </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;