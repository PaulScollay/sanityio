export default {
    name: 'park',
    type: 'document',
      title: 'Park',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'CaravanType',
        title: 'Caravan Type',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'caravantype' },
          },
        ],
      },
    ]
  }