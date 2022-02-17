function ProductRow({ price, name, inStock }) {

  const style = inStock ? {color:'black'} : {color: 'red'};

  return (
    <>
      <tr style={style} >
        <th>{name}</th>
        <th>{price}</th>
      </tr>
    </>
  )
}

export default ProductRow;