export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }],
        options: { weak: true },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: any) => Rule.required().email(),
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
        validation: (Rule: any) => Rule.required().regex(/^03\d{9}$/),
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule: any) => Rule.required().min(1).max(5),
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        validation: (Rule: any) => Rule.required(),
      },
    ],
  }
  