import data from "./data3.json";


const Example1 = (props) => {
    return <ul>
    {data.SocialMedias.map((item, key) => <li key={key}>{item}</li>)}
    </ul>;
};
export default Example1;
