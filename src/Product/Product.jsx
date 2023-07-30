import React ,{useState, useEffect }from 'react'
import axios from 'axios'


function Product() {
const [name,setName]=useState('')
const [id,setId]=useState(0)
const [image,setImage]=useState('')
const [price,setPrice]=useState(0)
const [desc,setDesc]=useState('')
const [products,setProducts]=useState([])
useEffect(()=>{
    const apiURL="http://localhost:5000/product/getAllProduct"
    axios.get(apiURL)
    .then((resp)=>{
        console.log("response api products",resp.data);
        setProducts(resp.data);
    })
    .catch((err)=>{
    console.log(err);
    })
})
const handleSubmit=(e)=>{
  e.preventDefault();
  let formData={
   "id":id,
   "name": name,
    "price":price,
    "descreption":desc,
    "image":image
  }
  axios.post('http://localhost:5000/product/addProduct', formData)
  .then((response) => {
    // Handle the response data (e.g., display a success message)
    console.log('Product added successfully:', response.data);
    setId(0)
    setImage('')
    setName('')
    setPrice(0)
    setDesc('')
   
  })
  .catch((error) => {
    // Handle any errors (e.g., display an error message)
    console.error('Error adding user:', error);
  });
}
  return (
  
    <div ClassName="container-fluid">
      <div className='row'> 
      <h1>Gestion Des Produits </h1>
      <div className='col-lg-5 auto'>
              
              
        <form  onSubmit={handleSubmit}>
        
        <div class="col-sm-12">
          <label  class="form-label">Id</label>
          <input type="number"  onChange={(e)=>{setId(e.target.value)}} class="form-control"  value={id} />
        </div>
        <div class="col-sm-12">
          <label  class="form-label">Name</label>
          <input type="text"  onChange={(e)=>{setName(e.target.value)}} class="form-control" value={name} />
        </div>
        <div class="col-sm-12">
          <label  class="form-label">Descreption</label>
          <input type="text"   onChange={(e)=>{setDesc(e.target.value)}} class="form-control"  value={desc} />
        </div>
        <div class="col-sm-12">
          <label  class="form-label">Price</label>
          <input type="number"   onChange={(e)=>{setPrice(e.target.value)}} class="form-control" value={price} />
        </div>
        <div class="col-sm-12">
          <label  class="form-label">Image</label>
          <input type="text"   onChange={(e)=>{setImage(e.target.value)}} class="form-control" value={image} />
        </div>

       

      <button class="mt-5 w-100 btn btn-primary btn-lg" type="submit">Add Product</button>
    </form>




          </div>
          <div className='col-lg-7'>
          <table class="table table-success">
                <thead>
                    <tr>
                   
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                  
                   
                    </tr>
                </thead>
                <tbody>
                    { products.map(product=>(
                    <tr key={product.id} >
                       
                        <td>
                            <img  className="rounded-circle"
                                  style={{ width: '50px', height: '50px' ,backgroundColor:'blue'}} 
                                  src={product.image}/>
                        </td>
                        <td>{product.name}</td>
                        <td>{product.price} </td>
                        <td>{product.descreption}</td>
                       
                    </tr>
                  ))}
                   
                </tbody>
                </table>
          </div>

         </div>
      </div>
         
  )
}

export default Product




 