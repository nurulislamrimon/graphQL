export const productSchema = `
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
`;
