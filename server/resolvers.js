import Links from "/imports/api/links";
export const resolvers = {
  Query: {
    say: (obj, args, context, info) => {
      console.log("say");
      return "Hello Meteor Vienna 👋";
    },
    links: (obj, args, context, info) => {
      const links = Links.find().fetch();
      console.log("links", links);
      return links;
    }
  }
};
