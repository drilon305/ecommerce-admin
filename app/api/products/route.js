import { Product } from '../../../models/Product'
import { mongooseConnect } from '../../lib/mongoose'

export const GET = async () => {
    await mongooseConnect()

    return Response.json(await Product.find())
}

export const POST = async (request) => {
    await mongooseConnect()
    
  
    const {title, description, price} = await request.json();

    const productDoc = await Product.create({
        title, description, price,
    })

    return Response.json(productDoc)
}