import data from "./data3.json";
import { Link } from "react-router-dom";


const Example3 = (props) => {
    return <div>
    {data.Experiences.map((item, key) => 
    <div key={key}>
        <img src={item.logo} alt={item.companyName}></img>
        <br></br>
        <Link to={item.url}>{item.companyName}</Link>
        <h5>{item.roles[0].title}</h5>
        <p>{item.roles[0].location}</p>
        <p>{item.roles[0].description}</p>
    </div>)}
    </div>;
};
export default Example3;
