import { gql } from '@apollo/client';


const GET_BOOKS = gql`
    query GetBooks {
        books {
            id
            title
            author
            coverPhotoURL
            readingLevel
        }
    }
`;

export interface BookTypes {
    id: string | number;
    title: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
}



export default GET_BOOKS;