import image from '../assets/helloimage.avif';

const Newsitem = ({title, description, src, url}) => {
  return (
   
   // 345
   
        
    
    <div className="col-sm-4" >
      <div class="card bg-dark text-light mb-3 my-3 px-2 ">
    <img src={src?src:image} style={{height: "200px",width: "300px"}} class="card-img-top" alt="..." />
    
    
    <div className="card-body">

      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice( 0,90):"lorem1udjfvho;dfiuvbdfiujbviubvjiusdvbkbdsjkjsdvbbkusdvjkbsdvkbjdvkbjlorem"}</p>
      <a href={url} class="btn btn-primary">Click here</a>
     
    
    </div>
  </div>
  </div>
  
  
  
  )
}

export default Newsitem