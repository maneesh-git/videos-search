import axios from 'axios';

// ADD your YOUTUBE API key here
const KEY = "";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});