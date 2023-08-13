import axios from "axios";

 
const SERVER_URL = "http://localhost:5173"


export const getAllNews = () =>{


    const url = `${SERVER_URL}/news`;

    return axios.get(url);
}

export const getNews = (newsId) =>{


    const url = `${SERVER_URL}/news/${newsId}`;

    return axios.get(url);
}

export const getAllEvents = () =>{


    const url = `${SERVER_URL}/events/`;

    return axios.get(url);
}


export const getEvents = (eventsId) =>{


    const url = `${SERVER_URL}/events/${eventsId}`;

    return axios.get(url);
}


export const getAllAnounce = () =>{


    const url = `${SERVER_URL}/Anounce/`;

    return axios.get(url);
}


export const getAnounce = (anounceId) =>{


    const url = `${SERVER_URL}/Anounce/${anounceId}`;

    return axios.get(url);
}

export const getAllGallery = () =>{


    const url = `${SERVER_URL}/Gallery/`;

    return axios.get(url);
}


export const getGallery = (galleryId) =>{


    const url = `${SERVER_URL}/Gallery/${galleryId}`;

    return axios.get(url);
}