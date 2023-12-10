export const schema = `
type Product{
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
}

input ProductInput {
    id:ID
    productName:String!
    category: String!
    price: Int
    seller:[UserInput]!
}


input UserInput{
    name:String
    email:String!
    userType: userType
}
  

type Mutation{
    createProduct(input:ProductInput):Product
}
`;
