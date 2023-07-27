
const ResultComponent = (props) => {
    const data = props.data

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: "#658fad",
            padding:"0 0 20px 10px"
        }}>
            <h2>Entered information:</h2>
            <p>Your name: {data.fname} {data.lname}</p>

            <p>Your age: {data.age}</p>
            <p>Your gender: {data.sex}</p>
            <p>Your destination: {data.destination}</p>
            <p>Your dietary restrictions:</p>

            <span>**Nuts free : {data.nonuts ? 'Yes' : 'No'}</span>
            <span>**Lactose free : {data.nolactose ? 'Yes' : 'No'}</span>
            <span>**Vegan meal : {data.vegan ? 'Yes' : 'No'}</span>
        </div>

    )
}

export default ResultComponent