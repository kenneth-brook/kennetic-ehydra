export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      title: 'Description',
    },
    {
      name: 'store',
      type: 'reference',
      to: [
        {
          type: 'store',
        },
      ],
    },
  ],
}
