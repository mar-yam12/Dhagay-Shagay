import type { Rule } from 'sanity';

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule: Rule) => Rule.required().min(3)
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: Rule) => Rule.required().min(10)
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
      validation: (Rule: Rule) => Rule.required().min(0)
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule: Rule) => Rule.min(0).max(100)
    },
    {
      name: 'priceWithoutDiscount',
      type: 'number',
      title: 'Price Without Discount',
      description: 'Original price before discount',
      validation: (Rule: Rule) => Rule.min(0)
    },
    {
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Tags'
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rating of the product',
      validation: (Rule: Rule) => Rule.min(0).max(5)
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings'
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      validation: (Rule: Rule) => Rule.required().min(0)
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Add sizes like S , M , L , XL , XXL'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This will be used to create a URL for this product',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    },
    {
      name: 'isNew',
      type: 'boolean',
      title: 'Is New',
      description: 'Is this a new product'
    }
  ]
};
