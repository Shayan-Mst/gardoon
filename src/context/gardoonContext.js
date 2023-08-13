import { createContext } from "react";






 export const gardoonContext = createContext({

loading:false,
setLoading: () => {},

new:{},
event:{},
anounce:{},
gallery:{},

news:{},
setNews: () => {},

events:{},
setEvents: () => {},

anounces:{},
setAnounces: () => {},

galleries:{},
setGalleries: () => {},

about:{},
setAbout: () => {},

filteredNews : [],
setFilteredNews : () => {},

filteredEvents : [],
setFilteredEvents : () => {},

filteredAnounce : [],
setFilteredAnounce : () => {},


createNews: () => {},

createEvent: () => {},

createAnounce: () => {},

createGallery: () => {},

createAbout: () => {},


updateNews: () => {},

updateEvent: () => {},

updateAnounce: () => {},

updateGallery: () => {},

updateAbout: () => {},



deleteNews: () => {},

deleteEvent: () => {},

deleteAnounce: () => {},

deleteGallery: () => {},

deleteAbout: () => {},


})