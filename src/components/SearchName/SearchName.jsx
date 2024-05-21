import Food from '../Food/Food'
import '../../scss/searchName.css'

function SearchName ({ foods }) {
  const foodsHtml = foods.map((item, i) => (
    <li key={i} className='foodContainer'>
      {' '}
      <Food data={item} />
    </li>
  ))

  console.log('Prop de foods pasada a SearchName:', foods)

  return (
    <div>
      <ul className='searchNameContainer'>
        <h1 className='searchFoodTitle'>Buscador de comidas:</h1>

        {/* articulo de ejemplo */}
        <article>
          <img
            src='https://media.istockphoto.com/id/1364933651/es/foto/tarta-de-queso-cl%C3%A1sica.jpg?s=612x612&w=0&k=20&c=Hgvq9_3Wy0v2_zanfC6AL2iWDZIVKgJ-NxfyAROCZBY='
            alt=''
            width='200'
          />
          <h3>nombre ejemplo</h3>
          <p>postre</p>
          <p>la tipica tarta de queso</p>
        </article>

        {foodsHtml}
      </ul>
    </div>
  )
}

export default SearchName
