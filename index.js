import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { postSchema } from "./postSchema.js";
import { postResolver } from "./postResolvers.js";

async function boostrap() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: postSchema,
    resolvers: postResolver,
  });
  const port = 5000;

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(port, () => {
    console.log("App is listening at port, ", port);
  });
}

boostrap();
