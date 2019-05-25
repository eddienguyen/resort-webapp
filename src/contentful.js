import { createClient } from 'contentful';

export default createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.REACT_APP_CONTENTFUL_API_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_ACCESS_TOKEN
});