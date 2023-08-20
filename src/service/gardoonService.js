import axios from "axios";

 
const SERVER_URL = "http://127.0.0.1:8000"


export const getAccess = (user) =>{


    const url = `${SERVER_URL}/auth/jwt/login`;

    return axios.post(url,user,{withCredentials:true});
}

export const getAllNews = () =>{


    const url = `${SERVER_URL}/news`;

    return axios.get(url);
}

export const getNews = (newsId) =>{


    const url = `${SERVER_URL}/news/${newsId}`;

    return axios.get(url);
}

export const getAllEvents = () =>{


    const url = `${SERVER_URL}/events`;

    return axios.get(url);
}


export const getEvent = (eventsId) =>{


    const url = `${SERVER_URL}/events/${eventsId}`;

    return axios.get(url);
}


export const getAllAnounce = () =>{


    const url = `${SERVER_URL}/anounce`;

    return axios.get(url);
}


export const getAnounce = (anounceId) =>{


    const url = `${SERVER_URL}/anounce/${anounceId}`;

    return axios.get(url);
}

export const getAllGallery = () =>{


    const url = `${SERVER_URL}/gallery`;

    return axios.get(url);
}


export const getGallery = (galleryId) =>{


    const url = `${SERVER_URL}/gallery/${galleryId}`;

    return axios.get(url);
}


export const createNews = (news) => {



    const url = `${SERVER_URL}/news`;

    return axios.post(url,news);
}


export const updateNews = (news , newsId) => {



    const url = `${SERVER_URL}/news/${newsId}`;

    return axios.put(url , news);


}


export const deleteContact = (newsId) => {


    const url = `${SERVER_URL}/news/${newsId}`;

    return axios.delete(url);
}


export const createEvent = (event) => {



    const url = `${SERVER_URL}/events`;

    return axios.post(url,event);
}


export const updateEvent = (event , eventId) => {



    const url = `${SERVER_URL}/events/${eventId}`;

    return axios.put(url , event);


}


export const deleteEvent = (eventId) => {


    const url = `${SERVER_URL}/events/${eventId}`;

    return axios.delete(url);
}


export const createAnounce = (anounce) => {



    const url = `${SERVER_URL}/anounce`;

    return axios.post(url,anounce);
}


export const updateAnounce = (anounce , anounceId) => {



    const url = `${SERVER_URL}/anounce/${anounceId}`;

    return axios.put(url , anounce);


}


export const deleteAnounce = (anounceId) => {


    const url = `${SERVER_URL}/anounce/${anounceId}`;

    return axios.delete(url);
}

export const createGallery = (gallery) => {



    const url = `${SERVER_URL}/gallery`;

    return axios.post(url,gallery);
    
}


export const updateGallery = (gallery , galleryId) => {



    const url = `${SERVER_URL}/gallery/${galleryId}`;

    return axios.put(url , gallery);


}


export const deleteGallery = (galleryId) => {


    const url = `${SERVER_URL}/gallery/${galleryId}`;

    return axios.delete(url);
}