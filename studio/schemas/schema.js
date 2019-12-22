// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import siteSettings from './singletons/siteSettings'

// Texts
import genericText from './texts/genericText'
import reportText from './texts/reportText'
import simpleText from './texts/simpleText'
import localeBlock from './texts/localeBlock'
import localeString from './texts/localeString'
import localeSlug from './texts/localeSlug'
import localeBlockSimple from './texts/localeBlockSimple'
import localeBlockReport from './texts/localeBlockReport'

// Images
import mainRepresentation from './images/mainRepresentation'
import figure from './images/figure'
import mediaObject from './images/mediaObject'

// document schemas
import post from './documents/post'
import actor from './documents/actor'
import madeObject from './documents/madeObject'
import work from './documents/work'
import collection from './documents/collection'
import group from './documents/group'
import linguisticObject from './documents/linguisticObject'
import report from './documents/report'
import visualItem from './documents/visualItem'
import event from './documents/event'
import experimental from './documents/experimental'
import move from './documents/move'
import place from './documents/place'
import designOrProcedure from './documents/designOrProcedure'
import project from './documents/project'
import typeClass from './documents/types/type'
import systemCategory from './documents/types/systemCategory'
import material from './documents/types/material'
import concept from './documents/types/concept'
import timeline from './documents/timeline'
import exhibition from './documents/exhibition'
import acquisition from './documents/acquisition'
import activity from './documents/activity'
import objectFeature from './documents/objectFeature'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import production from './objects/activities/production'
import creation from './objects/activities/creation'
import timespan from './objects/timespan'
import transformation from './objects/activities/transformation'
import endingActivity from './objects/activities/endingActivity'
import name from './objects/name'
import beginningActivity from './objects/activities/beginningActivity'
import actorInRole from './objects/actorInRole'
import dimension from './objects/dimension'
import measurement from './objects/activities/measurement'
import leaving from './objects/activities/leaving'
import joining from './objects/activities/joining'
import identifier from './objects/identifier'
import birth from './objects/activities/birth'
import death from './objects/activities/death'
import part from './objects/part'
import dissolution from './objects/activities/dissolution'
import formation from './objects/activities/formation'
import manifest from './objects/manifest'
import timelineSlide from './objects/timelineSlide'
import feature from './objects/feature'
import externalMediaObject from './images/externalMediaObject'
import valueSlider from './objects/valueSlider'
import era from './objects/era'
import background from './objects/background'
import reportPart from './objects/reportPart'
import instagramPost from './objects/instagramPost'
import file from './objects/file'

// Site
import navigation from './site/navigation'
import navItem from './site/navItem'
import navSection from './site/navSection'
import openGraph from './site/openGraph'
import route from './site/route'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'special-collection',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    madeObject,
    collection,
    actor,
    group,
    event,
    activity,
    place,
    post,
    exhibition,
    timeline,
    acquisition,
    move,
    objectFeature,
    report,
    designOrProcedure,
    project,
    work,
    visualItem,
    linguisticObject,
    typeClass,
    systemCategory,
    concept,
    material,
    experimental,
    navigation,
    route,
    siteSettings,
    // Objects
    authorReference,
    name,
    birth,
    death,
    beginningActivity,
    production,
    transformation,
    endingActivity,
    creation,
    measurement,
    leaving,
    joining,
    formation,
    dissolution,
    timespan,
    actorInRole,
    dimension,
    feature,
    identifier,
    manifest,
    timelineSlide,
    part,
    valueSlider,
    era,
    background,
    reportPart,
    instagramPost,
    file,
    navItem,
    navSection,
    openGraph,
    // Text
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    genericText,
    reportText,
    simpleText,
    localeBlock,
    localeBlockSimple,
    localeBlockReport,
    localeString,
    localeSlug,
    // Image
    mainImage,
    mainRepresentation,
    figure,
    mediaObject,
    externalMediaObject
  ])
})
