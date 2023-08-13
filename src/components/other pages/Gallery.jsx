


import semnan1 from "./../../assets/semnan.jpg"







const Gallery = () => {




    return(<>


    <div id="gallery">
    <div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex my-4 py-2 px-4 ">گالری عکس ها</div>

<div className="grid m-4 p-3">
<div className="row m-2">

    <div className="col-lg-4">
        <div className="cnt">
<img className="img-fluid" src={semnan1}/>
<span className="g-date">12 اردیبهشت 1402</span>
<div className="overlay">
   <div className="image-caption">توضیح درباره عکس از پایین به بالا فقط برای امتحان کردن ساخته شده است و تو انقدر احمق هستی</div>
</div>
</div>
    </div>

    <div className="col-lg-4">
    <img className="img-fluid" src={semnan1}/>
    <span className="g-date">12 اردیبهشت 1402</span>
</div>

<div className="col-lg-4">
<img className="img-fluid" src={semnan1}/>
<span className="g-date">12 اردیبهشت 1402</span>
</div>


</div>

</div>

    </div>
    
    
    </>)
}

export default Gallery;