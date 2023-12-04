"use client"

import Link from 'next/link'
import Layout from '../../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data)
    })
  }, [])

  return (
    <Layout>
      <Link className='bg-blue-900 text-white rounded-md py-1 px-2  ' href={'/products/new'}>Add new product</Link>
      {/* <table className='basic'>
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
          <tbody>
            {products.map(product => (
              <tr>
                <td>{product.title}</td>
                <td>buttons</td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table> */}
    </Layout>
  )
}