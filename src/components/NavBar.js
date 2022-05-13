import "../assets/NavBar.css";
import travelImage from '../assets/world.png'
export default function NavBar() {
  return (
    <div className="navBarHead">
      <nav>
        <ul>
          <li>
            <img src= {travelImage} alt = "travelImage"></img>
          </li>
          <li className="head">MY TRAVEL JOURNAL</li>
        </ul>
      </nav>
    </div>
  );
}
