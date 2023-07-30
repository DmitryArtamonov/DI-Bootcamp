import {useState} from 'react'

const Form = () => {

const [message, setMessage] = useState('')


    const formSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputData = formData.get('input')

        try {
            const response = await fetch('http://localhost:3000/api/world', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({post: inputData }),            
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const responseData = await response.json();
            setMessage(`I recieve your POST request. Your message is ${responseData.message}`)

          } catch (error) {
            console.error('Error:', error);
          }


    }



    return (
        <div>
            <h1>Post to Server:</h1>
            <form onSubmit={formSubmit}>
                <input name='input'>

                </input>
                <button type="submit">
                    Submit
                </button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default Form
