export default {
  title: 'Destruction',
  name: 'endingActivity',
  type: 'object',
  fields: [
    {
      title: 'Carried out by',
      name: 'carriedOutBy',
      type: 'array',
      of: [{type: 'actorInRole'}]
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
    }
  ],
  preview: {
    select: {
      date: 'productionDate'
    },
    prepare (selection) {
      const {date} = selection
      return {
        title: `Ending${date ? ', dated ' + date : ''}`
      }
    }
  }
}
