import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.searchByTitle?.length > 0) {
          if (context.filteredItems?.length > 0){
            return(
              context.filteredItems?.map(item => (
                <Card key={item.id} data={item} />
              ))
            )
          } else {
            return(
              <div>No results found</div>
            )
          }
          
            
            
        } else {
          return(
            context.items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          )
            
    }
}


    return (
      <Layout>
        <div className="flex items-center justify-center realtive w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)} 
        />
        {!context.items ? (
          <div className="text-xl flex items-center justify-center w-full h-screen">Loading...</div>
          ) : (
            <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
                {renderView()}
            </div>
          )
        }
        <ProductDetail />    
      </Layout>
    )
  }
  
  export default Home