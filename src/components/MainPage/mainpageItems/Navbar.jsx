import { Link, useLocation } from "react-router-dom";



const Navbar = () => {

    const location = useLocation();

    const shouldNotRender = (
        location.pathname.startsWith('/page/admin')
    )

   
    return(
<>
{

!shouldNotRender


?<nav className="navbar navbar-expand-lg justify-content-center">

{location.pathname == '/' ? <Link id="active">خانه</Link> : <Link  to='/'>خانه</Link>}
{location.pathname == '/events' ? <Link id="active">رویداد  ها</Link>:<Link to='/events'>رویداد ها</Link>}
{location.pathname == '/news' ? <Link id="active">اخبار و مقالات</Link>:<Link to='/news'>اخبار و مقالات</Link> }
{location.pathname == '/anounce' ? <Link id="active">اطلاعیه ها</Link>:<Link to='/anounce'>اطلاعیه ها</Link> }
{location.pathname == '/calendar' ? <Link id="active">تقویم</Link>:<Link to='/calendar'>تقویم </Link> }

</nav> :null }


</>

    )
}


export default Navbar;