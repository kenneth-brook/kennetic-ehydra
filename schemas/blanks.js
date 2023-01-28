export default {
  name: 'blanks',
  type: 'document',
  title: 'Blanks',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'vendor',
      type: 'reference',
      to: [
        {
          type: 'vendor',
        },
      ],
    },
    {
      name: 'vendorSKU',
      type: 'string',
      title: 'Vendor SKU',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Vendor Price',
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Number in Stock',
    },
  ],
}
