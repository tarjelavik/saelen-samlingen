import {supportedLanguages} from '../vocabularies/default'

export default {
  name: 'localeBlockReport',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: true}
    }
  ],
  fields: supportedLanguages.map(lang => (
    {
      title: lang.title,
      name: lang.id,
      type: 'reportText',
      fieldset: lang.isDefault ? null : 'translations'
    }
  )),
  preview: {
    select: {
      blocks: 'nor'
    },
    prepare (selection) {
      const {blocks} = selection
      const block = (blocks || []).find(block => block._type === 'block')

      return {
        title: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No description'
      }
    }
  }
}
