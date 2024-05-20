

function Food({data}) {
  return (
    <article>
        <img src={data.image} alt=""/>
        <h3>{data.name}</h3>
        <p>{data.classification}</p>
        <p>{data.description}</p>
    </article>
  )
}

export default Food
