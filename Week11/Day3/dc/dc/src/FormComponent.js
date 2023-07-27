import React from "react";

function FormComponent(props) {


  const initialFormData = Object.freeze({fname: ''});

    const {getData, data} = props

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleSubmit = () => {
        console.log('SUBMIT:', data)
        const queryString = new URLSearchParams(data).toString();
        const apiUrl = `http://localhost:3000/?${queryString}`;
        console.log('url', apiUrl)
        window.open(apiUrl, '_blank')

    };


    const handleChange = (event) => {
      let key = event.target.id

      key = key.includes('sex') ? 'sex' : key
      
      let value = event.target.value
      value = event.target.type === 'checkbox' ? event.target.checked : value
      getData({[key]: value})
    }
 
    return (
      
        <form  onChange={handleChange} onSubmit={handleSubmit}

            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "#ba8f29",
                padding:"0 0 20px 10px"
            }}
        >
            <h2>Sample form</h2>
            <TextInputComponent id="fname" placeholder="First Name" />
            <TextInputComponent id="lname" placeholder="Last Name" />
            <TextInputComponent id="age" placeholder="Age" />

            <br />

            <label>
                Male
                <input type="radio" name="sex" id='sex1' value="male" />
            </label>
            <label>
                Female
                <input type="radio" name="sex" id='sex2' value="female" />
            </label>

            <br />

            <label htmlFor="destination">Choose destination</label>
            <select id="destination">
                <option value="Thailand">Thailand</option>
                <option value="Japan">Japan</option>
                <option value="Brazil">Brazil</option>
            </select>

            <br />

            <label>
                <input type="checkbox" id="nonuts" value="Nuts free" />
                Nuts free
            </label>
            <label>
                <input type="checkbox" id="nolactose" value="Lactose free" />
                Lactose free
            </label>
            <label>
                <input type="checkbox" id="vegan" value="Vegan" />
                Vegan
            </label>

            <button type="button" style={{ marginTop: "20px" }} onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
}

const TextInputComponent = (props) => {
    const { id, placeholder } = props;
    return (
        <input id={id} style={{ margin: "10px 0" }} placeholder={placeholder}></input>
    );
};

export default FormComponent;
