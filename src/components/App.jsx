import { useEffect, useState } from "react";
import getDataApi from "./Services/Api";
import SearchName from "./SearchName/SearchName";



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

      <SearchName  foods={foods}/>
    </div>
  );
}

export default App
