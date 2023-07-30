import React  , {useEffect ,useState } from 'react'
import axios from "axios"
function Blog() {

    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/blog/getAllBlogs")
        .then(resp=>{
            console.log("blogs",resp.data);
            setBlogs(resp.data)
        }).catch(err=>{
            console.log(err);
        })
    })
  return (
    <div className='container'>
     
     <div className='row'  >
      {
        blogs.map(blog=>(
        

              <div key={blog.id} className="col-md-4">
              <div className="card mt-5 mb-3 bg-success">
                <div className="card-body">
                  <h5 className="card-title">{blog.titre}</h5>
                  <p className="card-text">{blog.descreption}</p>
                  <p className="card-text">Category: {blog.categorie}</p>
                  <p className="card-text">Ref: {blog.ref}</p>
                </div>
              </div>
              </div>

        
        ))
      }

    </div>
    </div>
  )
}

export default Blog