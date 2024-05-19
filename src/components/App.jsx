import { useEffect, useState } from "react";
import getDataApi from "./Services/Api";



function App() {
  const [foods, setFoods] = useState([]);


  useEffect(() =>{
    getDataApi().then((cleanData)=>{
      setFoods(cleanData)
    })
  }, []);

  return ( 
    <div>
      <h1>Lista de comidas</h1>
    </div>
  );
}

export default App
