import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c44d28d1a5434e18cfe0ab2c8042d835c3930f2a9fe14a204409a80f4a526923'
    }
});