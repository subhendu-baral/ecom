import React, { useState, useEffect } from 'react';
import './Product.css'
import Productone from './Productone';
import axios from 'axios';

export default function Productlist() {
const headers = {
  'Authorization':'Bearer 4ceeadfa4888b081f1bdc29ad12d3c649010ee35f392239c02875da5affb2295e1b1325eb6d43a217cbb8b0ce9be622f549f947b4fb7f266edf9cd5ab21c84c24cb5d85b75793ca297ae7d6734d2ccc56edc25d1b76384c4d2723b764ff2395b0324945f44ab88b9b22562f85609bf355aeeab7f430318e81afe5edf653ea433',
  'Content-Type': 'application/json'
}

  const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://fakestoreapi.com/products/');
  //     const datas = await response.json();
  //     setData(datas);
  //   }

  //   fetchData();
  // }, []);

  axios.get('http://localhost:1337/api/products/', {headers})
  .then(response =>{
    console.log(response.data)
    const datas = response;
    setData(datas);
  })
  .catch(error => {
    console.log(error)
  })

  return (
<>
<div className="wrapper mb-4">           
            <div className="container">
                <div className="row g-1">
      {data ? (
        data.map(d=>(
          <Productone key={d.data.id} title={d.data.attributes.Title} ></Productone>
        ))
        
      ) : (
        <div>Loading Please Wait...</div>
      )}

      </div>
      </div>
      </div>
    </>
  );
}
