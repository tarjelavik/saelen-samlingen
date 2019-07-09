export default {
    title: 'Actor in role as',
    name: 'actorInRole',
    type: 'object',
    fields: [
        {
            title: 'Actor',
            name: 'actor',
            type: 'reference',
            to: [{ type: 'actor', title: 'Actor' }]
        },
        {
            title: 'Role',
            name: 'role',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ],
    preview: {
        select: {
            actor: 'actor.displayName',
            role: 'role',
        },
        prepare(selection) {
          const {actor, role} = selection
            return {
                title: actor + ', ' + role,
            }
        }
    }
}