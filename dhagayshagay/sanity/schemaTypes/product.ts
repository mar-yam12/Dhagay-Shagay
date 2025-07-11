import { title } from "process";

export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
      },
      {
        name: 'priceWithoutDiscount',
        type: 'number',
        title: 'Price Without Discount',
        description: 'Original price before discount'
      },
      {
        name: 'tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'style',
        type: 'reference',
        to: [{ type: 'style' }],
      },
      {
        name:'rating',
        type:'number',
        title:'Rating',
        description:'Rating of the product'
      },
      {
        name: 'ratingCount',
        type: 'number',
        title: 'Rating Count',
        description: 'Number of ratings'
      },
      {
        name:'quantity',
        type: 'number',
        title: 'Quantity'
      },

      {
        name: 'sizes',
        type: 'array',
        title: 'Sizes',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        },
        description: 'Add sizes like S , M , L , XL , XXL'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true // Enables cropping and focal point selection
        }
      },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'This will be used to create a URL for this product',
        },
        {
          name: 'category',
          title: 'Category',
          type: 'string',
        },
        {
            name: 'colors',
            type: 'array',
            title: 'Colors',
            of: [{ type: 'string' }],
            options: {
              layout: 'tags'
            },
        },
        {
            name:'isNew',
            type:'boolean',
            title:'Is New',
            description:'Is this a new product'
        }
            //   {
    //     name: 'tags',
    //     type: 'array',
    //     title: 'Tags',
    //     of: [{ type: 'string' }],
    //     options: {
    //       layout: 'tags'
    //     },
    //     description: 'Add tags like "new arrival", "bestseller", etc.'
    //   },
    ]
  };