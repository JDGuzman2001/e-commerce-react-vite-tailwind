import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=> setItems(data))
  }, [])

    return (
      <Layout>
        Home
        {
          items ? (
            <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
              {
                items.map(item => (
                  <Card key={item.id} data={item}/>
                ))
              }
            </div>
          ) : (
            <div className='flex flex-col items-center mt-500 '>
              Loading...
            </div>
          )
        }
        <ProductDetail />
        
        
        
      </Layout>
    )
  }
  
  export default Home