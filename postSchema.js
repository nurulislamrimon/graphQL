export const postSchema = `
type Post{
    id:ID
    userId:Int
    title:String
    body:String
}


type Query {
    getPosts:[Post]
}
`;
