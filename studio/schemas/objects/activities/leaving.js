var capitalize = require('capitalize')

export default {
  title: 'Leaving',
  name: 'leaving',
  type: 'object',
  fields: [
    {
      title: 'Classified as',
      name: 'hasType',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'Hendelsestype'}
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Timespan',
      name: 'timespan',
      type: 'array',
      of: [{type: 'timespan'}],
      validation: Rule => Rule.length(1).warning('You should only register one timespan')
    },
    {
      title: 'Took place at',
      name: 'tookPlaceAt',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'place'}
          ]
        }
      ]
    },
    {
      title: 'Left',
      name: 'leftBy',
      description: 'Actor(s) that left this group',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'actor'},
            {type: 'group'}
          ]
        }
      ]
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}]
    }
  ],
  preview: {
    select: {
      type: '_type',
      date: 'date'
    },
    prepare (selection) {
      const {type, date} = selection
      return {
        title: `${capitalize(type)}${date ? ' at ' + date : ''}`
      }
    }
  }
}
