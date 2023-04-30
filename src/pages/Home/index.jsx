import { useState, useEffect } from 'react'
import { Header, Product } from '../../components/index'
import { Container } from './styles'
import { api } from '../../services/api'

export function Home() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products')
      setProduct(response.data)
    }
    fetchProducts()
  }, [])

  return (
    <Container>
      <Header />
      {product.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </Container>
  )
}
