import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

//importing tmdb environmental variables process.env
const tokenTmdb = import.meta.env.VITE_APP_TOKEN;

//sending token in params header
const headers = {
    Authorization: `Bearer ${tokenTmdb}`
};

//fetching method
export const fetchingData = async (url, params) => {
    try {
        const { data } = await axios.get(baseUrl + url, {
            headers,
            params,
        });
        return data;
    } catch (error) {
        console.log("api" + error);
        return error;
    }
};
