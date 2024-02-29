import "./squaredCard.css"

export default function SquaredCard({title = `Total \n Followers`, qtd = "100"}){
    return <div className='card'>
    <div className='titleCard'>
      {title}
    </div>
    <div className='textMiddleCard'>
      {qtd}
    </div>
    <div className='viewDetailsCard'>
      View Details
    </div>
  </div>
}