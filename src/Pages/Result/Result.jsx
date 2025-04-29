import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

const Result = () => {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`).then((res) => {
      setResults(res.data)
      setIsLoading(false)
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  },[categoryName])
  
  return (
    <LayOut>
      <section className='bg-gray-100 py-10 px-4 min-h-screen max-w-7xl mx-auto'>
        <h1 className='p-[30px]'>Results</h1>
        <p className="p-[30px]">Category / {categoryName}</p>
        <hr />
        {isLoading ? (<Loader/>) : (
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {results?.map((product) => (
            <ProductCard
              key={product.id}

              product={product}
            />
          ))}
        </div>
        )}
      </section>
    </LayOut>
  )
}

export default Result