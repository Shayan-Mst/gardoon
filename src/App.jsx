
import { Routes , Route} from 'react-router-dom'
import './App.css'  
import MainPage from './components/mainpage/MainPage'
import Navbar from './components/MainPage/mainpageItems/Navbar'
import SignUpIn from './components/mainpage/mainpageItems/SignUpIn'
import NotFound from './components/NotFound'
import TopBar from './components/MainPage/mainpageItems/TopBar'
import Footer from './components/MainPage/mainpageItems/Footer'
import Events from './components/other pages/Events'
import News from './components/other pages/News'
import NewsManagement from './components/admin/NewsManage/NewsManagement'
import EventManagement from './components/admin/EventManage/EventManagement'
import GalleryManagement from './components/admin/GalleryManage/GalleryManagement'
import NewsUpdate from './components/admin/NewsManage/NewsUpdate'
import Anounces from './components/other pages/Anounces'
import Gallery from './components/other pages/Gallery'
import EventUpdate from './components/admin/EventManage/EventUpdate'
import GalleryUpdate from './components/admin/GalleryManage/GalleryUpdate'
import SlideManagement from './components/admin/SlideManage/SlideManagement'
import SlideUpdate from './components/admin/SlideManage/SlideUpdate'
import AnounceManagement from './components/admin/AnounceManage/AnounceManagement'
import AnounceUpdate from './components/admin/AnounceManage/AnounceUpdate'
import InfoManagement from './components/admin/InfoManage/InfoManagement'
import EduCalendarManagement from './components/admin/EduCalManage/EduCalendarManagement'
import New from './components/other pages/New'
import Event from './components/other pages/Event'
import Galler from './components/other pages/Galler'
import Anounce from './components/other pages/Anounce'
import NewsEdit from './components/admin/NewsManage/NewsEdit'
import EventEdit from './components/admin/EventManage/EventEdit'
import GalleryEdit from './components/admin/GalleryManage/GalleryEdit'
import SlideEdit from './components/admin/SlideManage/SlideEdit'



function App() {
  

  return (
    <div className='App'>

<TopBar/>
<Navbar/>
<Routes>
{/* user page */}

<Route path='/' element={<MainPage/>}/>
<Route path='/signin' element={<SignUpIn/>}/>
<Route path='/events' element={<Events/>}/>
<Route path='/news' element={<News/>}/>
<Route path='/anounce' element={<Anounces/>}/>
<Route path='gallery'element={<Gallery/>}/>
<Route path='/news/:newsId' element={<New/>}/>
<Route path='/events/:eventId' element={<Event/>}/>
<Route path = '/gallery/:galleryId' element = {<Galler/>}/>
<Route path='/anounce/:anounceId' element = {<Anounce/>}/>
<Route path='*' element={<NotFound />}/>


{/*admin page*/}
<Route path = '/page/admin/news-manage'element={<NewsManagement/>}/>
<Route path = '/page/admin/event-manage'element={<EventManagement/>}/>
<Route path = '/page/admin/gallery-manage' element={<GalleryManagement/>}/>
<Route path = '/page/admin/slide-manage' element = {<SlideManagement/>}/>
<Route path = '/page/admin/anounce-manage' element={<AnounceManagement/>}/>
<Route path = '/page/admin/info-manage' element={<InfoManagement/>}/>
<Route path = '/page/admin/educal-manage' element={<EduCalendarManagement/>}/>
<Route path = '/page/admin/news-manage/update' element={<NewsUpdate/>}/>
<Route path = '/page/admin/event-manage/update' element={<EventUpdate/>}/>
<Route path = '/page/admin/gallery-manage/update' element={<GalleryUpdate/>}/>
<Route path = '/page/admin/slide-manage/update' element = {<SlideUpdate/>}/>
<Route path = '/page/admin/anounce-manage/update' element={<AnounceUpdate/>}/>
<Route path = '/page/admin/news-manage/edit' element={<NewsEdit/>}/>
<Route path = '/page/admin/event-manage/edit' element={<EventEdit/>}/>
<Route path='/page/admin/gallery-manage/edit' element={<GalleryEdit/>}/>
<Route path='/page/admin/slide-manage/edit' element = {<SlideEdit/>}/>
</Routes>

<Footer/>
    </div>
     
    
  )
}

export default App
