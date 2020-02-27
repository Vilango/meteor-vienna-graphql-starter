import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }
});



import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'

import {schema} from './schema'
import {resolvers} from './resolvers'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  // context: async ({ req }) => ({
  //   user: await getUser(req.headers.authorization)
  // })
})

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
})