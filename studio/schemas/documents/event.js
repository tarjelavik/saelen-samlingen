export default {
  title: 'Event',
  name: 'event',
  description: 'Should be fetched from KulturNav',
  type: 'document',
  fieldsets: [
    {
      name: 'state',
      title: 'State',
      options: {collapsible: true, collapsed: false}
    },
    {
      name: 'minimum',
      title: 'Mandatory fields for minimum registration',
      options: {collapsible: true, collapsed: false}
    }
  ],
  fields: [
    {
      name: 'editorialState',
      type: 'string',
      fieldset: 'state',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Working draft', value: 'workingDraft'},
          {title: 'Needs review', value: 'review'},
          {title: 'Published', value: 'published'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'accessState',
      type: 'string',
      fieldset: 'state',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Private/Secret', value: 'secret'},
          {title: 'Open', value: 'open'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      title: 'Classified as',
      name: 'hasType',
      description: 'WIP, should use API',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'eventType'}]}
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Title',
      name: 'label',
      fieldset: 'minimum',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      description: 'A shortish description',
      fieldset: 'minimum',
      type: 'localeBlock'
    },
    {
      title: 'Timespan',
      name: 'timespan',
      type: 'array',
      of: [{type: 'timespan'}],
      validation: Rule => Rule.length(1).warning('You should only register one timespan')
    },
    {
      title: 'Location',
      description: 'Where the hell did this happen?!',
      name: 'location',
      type: 'geopoint'
    },
    {
      title: 'Media',
      name: 'media',
      type: 'mediaObject'
    }
  ]
}
