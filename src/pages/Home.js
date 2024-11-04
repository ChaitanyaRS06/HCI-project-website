import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <h1>Home</h1>
      <nav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>
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

export default Home;