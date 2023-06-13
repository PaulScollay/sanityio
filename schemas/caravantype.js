export default {
    name: 'caravantype',
    type: 'document',
      title: 'Caravan Type',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'carvanpark',
        title: 'Carvan Park',
        type: 'reference',
        weak: true,
        to: [{type: 'park'}],
        description: 'Park to which this caravan type belongs'
      },
    ]
  }