import React, { useState } from 'react';
import FormComponent from './FormComponent';
import ResultComponent from './ResultComponent';

function App() {

  let [data, setData] = useState({nonuts: false, nolactose: false, vegan: false})

  const getData = (formdata) => {
    setData ({...data, ...formdata})
  }


  return (
    <>
      <FormComponent getData={getData} data={data}/>
      <ResultComponent data={data}/>
    </>
  );
}

export default App;