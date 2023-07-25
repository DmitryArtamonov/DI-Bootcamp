import data from './data3.json'


const Example2 = (props) => {
    return (
    <div>
      {data.Skills.map((item,key) => {
        return (
          <div key={key}>
            <h3>{item.Area}</h3>
            <ul>
              {item.SkillSet.map((item2,key2) => (
                  <li key={key2}>
                    {item2.Name}
                  </li>
              ))}
            </ul>
          </div>

        )})
      }
    </div>
  );
}
  export default Example2