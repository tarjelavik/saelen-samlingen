// TODO: Finish timeline with references to internal stuff and external. +datamodell
// See http://timeline.knightlab.com/docs/json-format.html#json-slide for more info

export default {
    title: 'Timeline slide',
    name: 'timelineSlide',
    type: 'object',
    fields: [
        {
            name: 'text',
            type: 'object',
            fields: [
                {
                    name: 'headline',
                    type: 'string'
                },
                {
                    name: 'text',
                    type: 'localeBlock',
                }
            ]
        },
        {
            name: 'media',
            type: 'image',
            fields: [
                {
                    title: 'Caption',
                    name: 'caption',
                    type: 'text'
                },
                {
                    title: 'Credit',
                    name: 'credit',
                    description: 'Add creator and link to resource',
                    type: 'string'
                }
            ]
        },
        {
            title: 'Timespan',
            name: 'timespan',
            type: 'array',
            of: [{ type: 'timespan' }],
            validation: Rule => Rule.length(1).warning('You should only register one timespan')
        },
        {
            title: 'Group',
            name: 'group',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            },
            validation: Rule => Rule.length(1).error('An event can only be in one group!') 
        },
        {
            title: 'Background',
            name: 'background',
            type: 'object',
            fields: [
                {
                    title: 'Image',
                    name: 'url',
                    type: 'image',
                },
                {
                    title: 'Color',
                    name: 'color',
                    type: 'color'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'text.headline',
        },
        prepare(selection) {
            const {title} = selection;
            return {
                title: title
            }
        }
    },
            
}
