import React from 'react'
import { GridContainer, ProductCard } from '../shared'
import { useProduct } from '../../../hooks'

export const HomePageProduct = () => {
    const {homePageProducts} = useProduct()
  return (
    <GridContainer>
        {homePageProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
        ))}
    </GridContainer>
  )
}
