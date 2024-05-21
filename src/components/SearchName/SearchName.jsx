import Food from "../Food/Food"

function SearchName({foods}) {
  
  const foodsHtml = foods.map((item) => <li> <Food data={item}/></li> )
  
  return (
    <div>
      <h1>Buscador de comidas:</h1>
    
    <ul>
      {foodsHtml}
    </ul>
    </div>
  )
}

export default SearchName
