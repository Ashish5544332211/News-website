import React, { useState } from 'react'
import { Navbar } from './component/navbar';
import NewsBoard from './component/NewsBoard';


const App = () => {
  // const [category,setCategory] = useState("general");
  return (
    <div>
      {/* setCategory={setCategory} */}
      <Navbar  />
      {/* category ={category} */}
  
      <NewsBoard  />
      </div>
     
   

  )
}
export default App;
