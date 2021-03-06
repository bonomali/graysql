'use strict';

module.exports = function (GQL) {
  return {
    name: 'Group',
    interfaces: ['Node'],
    nodeId: id => GQL.options.DB.getGroup(id),
    isTypeOf: obj => obj instanceof GQL.options.DB.Group,
    fields: {
      id: { type: 'Int' },
      name: { type: 'String' },
      members: {
        type: '@User',
        resolve: (group, args) => group.members
      }
    },
    queries: {
      group: require('./queries/group')
    }
  };
};
