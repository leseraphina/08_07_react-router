import { Link } from "react-router-dom";
import './Header.css';

export default function Header(){
  return (
   <header>
    <div>
      <h1>
        {/* <a href=""> */}
        <Link to="/">Logo</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/sample01">sample01</Link>
            <ul>
              <li>
                <Link to="sample01/sub01">sub01</Link>
              </li>
              <li>
                <Link to="sample01/sub02">sub02</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/sample02">sample02</Link>
          </li>
        </ul>
      </nav>
    </div>

   </header>
  );
}
