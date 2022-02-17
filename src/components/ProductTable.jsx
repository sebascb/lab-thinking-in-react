import ProductRow from './ProductRow';

function ProductTable({ data }) {
  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => {
            return (
              <ProductRow 
                key={product.id} 
                category={product.category} 
                price={product.price} 
                name={product.name} 
                id={product.id} 
                inStock={product.inStock} 
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable;