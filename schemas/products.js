import images from './images'

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
      type: 'string',
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
    {
      name: 'images',
      type: 'images',
    },
    {
      name: 'blank',
      type: 'reference',
      to: [
        {
          type: 'blanks',
        },
      ],
    },
  ],
}
