import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import order from './order'
import customer from './customer'
import review from './review'
import shipment from './shipment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, order, customer, review, shipment],
}
