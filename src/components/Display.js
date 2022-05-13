import "../assets/Display.css";
import locIcon from "../assets/locIcon.png";
export default function Display({ data }) {
  return (
    <div className="imageWithDetails">
      <div>
        <img src={data.imageUrl} alt = "famous images" className="images"></img>
      </div>
      <div className="details">
        <span className="location">
          <img src={locIcon} alt="location" className="locIcon"></img>
          {data.location}
        </span>
        <span>
          &nbsp;<a href={data.googleMapsUrl}>View on Google Map</a>
        </span>
        <p className="title">{data.title}</p>
        <p>
          {data.startDate} - {data.endDate}
        </p>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
}
