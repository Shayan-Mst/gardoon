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


    const url = `${SERVER_URL}/api/event/`;

    return axios.get(url);
}


export const getEvent = (eventsId) =>{


    const url = `${SERVER_URL}/api/event/${eventsId}/`;

    return axios.get(url);
}


export const getAllAnounce = () =>{


    const url = `${SERVER_URL}/api/notifications/`;

    return axios.get(url);
}


export const getAnounce = (anounceId) =>{


    const url = `${SERVER_URL}/api/notifications/${anounceId}/`;

    return axios.get(url);
}

export const getAllGallery = () =>{


    const url = `${SERVER_URL}/api/gallery/`;

    return axios.get(url);
}


export const getGallery = (galleryId) =>{


    const url = `${SERVER_URL}/api/gallery/${galleryId}/`;

    return axios.get(url);
}

export const getAllSlide = () =>{


    const url = `${SERVER_URL}/api/slide/`;

    return axios.get(url);
}

export const getSlide = (slideId) =>{


    const url = `${SERVER_URL}/api/slide/${slideId}/`;

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


export const deleteNews = (newsId) => {


    const url = `${SERVER_URL}/api/info/${newsId}/`;

    return axios.delete(url);
}


export const createEvent = (Event) => {



    const url = `${SERVER_URL}/api/event/`;
    const formData = new FormData();
    formData.append('image', Event.image); // Assuming 'image' is the key for the uploaded file in the 'news' object
  
    formData.append('category',Event.category);
    // Append other form fields if needed
    formData.append('title', Event.title);
    formData.append('description', Event.description);
  
    return axios.post(url,formData);
}


export const updateEvent = (Event , eventId) => {



    const url = `${SERVER_URL}/api/event/${eventId}/`;

    const formData = new FormData();
    typeof  Event.image != 'undefined' ?   formData.append('image', Event.image) : null // Assuming 'image' is the key for the uploaded file in the 'Event' object
  
  typeof Event.category != 'undefined' ?  formData.append('category',Event.category) : null;
    // Append other form fields if needed
  typeof  Event.title != 'undefined' ?  formData.append('title', Event.title) : null;

  typeof Event.description != 'undefined' ?   formData.append('description', Event.description) : null 
  

    return axios.put(url , formData);


}


export const deleteEvent = (eventId) => {


    const url = `${SERVER_URL}/api/event/${eventId}/`;

    return axios.delete(url);
}


export const createAnounce = (anounce) => {



    const url = `${SERVER_URL}/api/notifications/`;

    const formData = new FormData();
    formData.append('image', anounce.image); // Assuming 'image' is the key for the uploaded file in the 'news' object
  
    formData.append('notif_file',anounce.notif_file);
    // Append other form fields if needed
    formData.append('title', anounce.title);
    formData.append('description', anounce.description);

    return axios.post(url,formData);
}


export const updateAnounce = (anounce , anounceId) => {



    const url = `${SERVER_URL}/api/notifications/${anounceId}/`;

    const formData = new FormData();
    typeof  anounce.image != 'undefined' ?   formData.append('image', anounce.image) : null // Assuming 'image' is the key for the uploaded file in the 'anounce' object
  
  typeof anounce.notif_file != 'undefined' ?  formData.append('notif_file',anounce.notif_file) : null;
    // Append other form fields if needed
  typeof  anounce.title != 'undefined' ?  formData.append('title', anounce.title) : null;

  typeof anounce.description != 'undefined' ?   formData.append('description', anounce.description) : null 

    return axios.put(url , formData);


}


export const deleteAnounce = (anounceId) => {


    const url = `${SERVER_URL}/api/notifications/${anounceId}/`;

    return axios.delete(url);
}

export const createGallery = (gallery) => {



    const url = `${SERVER_URL}/api/gallery/`;

    const formData = new FormData();
    formData.append('image', gallery.image); // Assuming 'image' is the key for the uploaded file in the 'news' object
  
    formData.append('title', gallery.title);

    return axios.post(url,formData);
    
}


export const updateGallery = (gallery , galleryId) => {



    const url = `${SERVER_URL}/api/gallery/${galleryId}/`;

    return axios.put(url , gallery);


}


export const deleteGallery = (galleryId) => {


    const url = `${SERVER_URL}/api/gallery/${galleryId}/`;

    return axios.delete(url);
}

export const createSlide = (slide) => {


    const url = `${SERVER_URL}/api/slide/`;

    const formData = new FormData();
    formData.append('image', slide.image); // Assuming 'image' is the key for the uploaded file in the 'news' object
  
    formData.append('title', slide.title);
    formData.append('description', slide.description);

    return axios.post(url,formData);
}

export const updateSlide = (slide,slideId) => {


    const url = `${SERVER_URL}/api/slide/${slideId}/`;

    return axios.put(url,slide);
}

export const deleteSlide = (slideId) => {


    const url = `${SERVER_URL}/api/slide/${slideId}/`;

    return axios.delete(url);
}

export const updateInfo = (info,infoId) => {


    const url = `${SERVER_URL}/api/info_site/${infoId}/`;

    const formData = new FormData();
    typeof  info.description != 'undefined' ?   formData.append('description', info.description) : null // Assuming 'image' is the key for the uploaded file in the 'anounce' object
  
  typeof info.email != 'undefined' ?  formData.append('email',info.email) : null;
    // Append other form fields if needed
  typeof  info.phone_number != 'undefined' ?  formData.append('phone_number', info.phone_number) : null;

  typeof info.address != 'undefined' ?   formData.append('address', info.address) : null 


    return axios.put(url,formData);
}

export const getInfo = () =>{

    const url = `${SERVER_URL}/api/info_site/1/`;

    return axios.get(url);

}

export const updateEduCal = (educal)=>{

    const url = `${SERVER_URL}/api/calendar_management/1/`;

    const formData = new FormData();

  typeof  educal.name1 != 'undefined' ?   formData.append('name1', educal.name1) : null // Assuming 'image' is the key for the uploaded file in the 'anounce' object
  
  typeof educal.description1 != 'undefined' ?  formData.append('description1',educal.description1) : null;
    // Append other form fields if needed
  typeof  educal.name2 != 'undefined' ?  formData.append('name2', educal.name2) : null;

  typeof educal.description2 != 'undefined' ?   formData.append('description2', educal.description2) : null 

  typeof educal.name3 != 'undefined' ?  formData.append('name3',educal.name3) : null;
  

  typeof  educal.description3 != 'undefined' ?   formData.append('description3', educal.description3) : null // Assuming 'image' is the key for the uploaded file in the 'anounce' object
  
   // Append other form fields if needed
  typeof  educal.name4 != 'undefined' ?  formData.append('name4', educal.name4) : null;

  typeof educal.description4 != 'undefined' ?   formData.append('description4', educal.description4) : null 

  typeof  educal.nam5 != 'undefined' ?  formData.append('nam5', educal.nam5) : null;

  typeof educal.description5 != 'undefined' ?   formData.append('description5', educal.description5) : null 



    return axios.put(url,formData);
    
}

export const getEduCal = ()=>{

    const url = `${SERVER_URL}/api/calendar_management/`;

    return axios.get(url);
    
}