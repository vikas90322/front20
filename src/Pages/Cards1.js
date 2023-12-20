import React from 'react'
import { Link } from 'react-router-dom'
import './Form1.css'
const Cards1 = () => {
  return (
   <div>
     <div className='Card1-con-vik'>

<Link to='/Login' class="card-vik">
   <h2> Retail</h2>
</Link>
<Link to='/WhLogin' class="card-vik">
   <h2> Wholesale </h2>
</Link>



    </div>
   </div>
  )
}

export default Cards1