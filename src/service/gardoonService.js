import axios from "axios";

 
const SERVER_URL = "http://127.0.0.1:8000"


export const getAccess = (user) =>{


    const url = `${SERVER_URL}/auth/jwt/login/`;

    return axios.post(url,user);
}

export const getAllNews = () =>{


    const url = `${SERVER_URL}/api/info/`;

    return axios.get(url);
}

export const getNews = (newsId) =>{


    const url = `${SERVER_URL}/api/info/${newsId}/`;

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



    const url = `${SERVER_URL}/api/info/`;
    const formData = new FormData();
  formData.append('image', news.image); // Assuming 'image' is the key for the uploaded file in the 'news' object

  formData.append('category',news.category)
  // Append other form fields if needed
  formData.append('title', news.title);
  formData.append('description', news.description);

    return axios.post(url,formData);
}


export const updateNews = (news , newsId) => {



    const url = `${SERVER_URL}/api/info/${newsId}/`;

    const formData = new FormData();
  typeof  news.image != 'undefined' ?   formData.append('image', news.image) : null // Assuming 'image' is the key for the uploaded file in the 'news' object
  
  typeof news.category != 'undefined' ?  formData.append('category',news.category) : null;
    // Append other form fields if needed
  typeof  news.title != 'undefined' ?  formData.append('title', news.title) : null;

  typeof news.description != 'undefined' ?   formData.append('description', news.description) : null 

    return axios.put(url , formData);


}


export const deletNews = (newsId) => {


    const url = `${SERVER_URL}/api/info/${newsId}/`;

    return axios.delete(url);
}


export const createEvent = (Event) => {



    const url = `${SERVER_URL}/Event_API`;
    const formData = new FormData();
    formData.append('image', Event.image); // Assuming 'image' is the key for the uploaded file in the 'news' object
  
    formData.append('category',Event.category)
    // Append other form fields if needed
    formData.append('title', Event.title);
    formData.append('description', Event.description);
  
    return axios.post(url,formData);
}


export const updateEvent = (Event , eventId) => {



    const url = `${SERVER_URL}/events/${eventId}`;

    return axios.put(url , Event);


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