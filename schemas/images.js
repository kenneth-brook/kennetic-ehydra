export default {
  name: 'images',
  type: 'object',
  title: 'Images',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
