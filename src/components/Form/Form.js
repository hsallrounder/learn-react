import React,{useState} from 'react'
import './Form.css'

const Form = (props) => {


  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState("");

  const nameChangeHandler = (e)=>{
    setName(e.target.value)
  }

  const priceChangeHandler = (e)=>{
    setPrice(e.target.value);
  }

  const urlChangeHandler = (e)=>{
    setUrl(e.target.value);
  }

  const formEventHandler=(event)=>{
    event.preventDefault()  

    props.addProduct({name,})

    console.log(name);
    console.log(price);
    console.log(url);
  }

  return (

    <form onSubmit={formEventHandler}>

      <div>
        <label htmlFor='name'>Product Name</label>
        <input onChange={nameChangeHandler} type='text' id='product' placeholder='name'></input>
      </div>

      <div>
        <label htmlFor='price'>Price</label>
        <input onChange={priceChangeHandler} type='number' id='price' placeholder='price'></input>
      </div>

      <div>
        <label htmlFor='image'>Image Url</label>
        <input onChange={urlChangeHandler} type='text' id='image' placeholder='image'></input>
      </div>

      <button> Add Product</button>

    </form>
  )
}

export default Form