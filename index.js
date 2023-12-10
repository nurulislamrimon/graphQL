import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";

async function boostrap() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `type Product{
        id:ID
        productName:String
        category: String
        price: Int
        seller:[User]
    }
    
    type User{
        name:String
        email:String
        userType: userType
    }
    
    enum userType{
        Seller
        Customer
        Admin
    }
    
    type Query {
        getProduct(id:ID):Product
    }`,
    resolvers: {},
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
