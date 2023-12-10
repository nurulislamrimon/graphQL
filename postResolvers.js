import axios from "axios";

export const postResolver = {
  Query: {
    getPosts: async () =>
      (await axios.get("https://jsonplaceholder.typicode.com/posts")).data,
  },
};
