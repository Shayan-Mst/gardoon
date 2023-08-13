





const Gardoon = () => {



    const monthArray = [

        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند'
]


const colorArray = [
    
    
    'rgb(6, 86, 6)',
    'green',
    'yellowgreen',

    'rgb(180, 180, 16)',
    'rgb(223, 238, 14,0.7)',
    'rgb(231, 210, 102)',

    'rgb(255, 194, 79)',
    'orange',
    'rgb(94, 13, 169)',


    'rgb(15,15,156)',
    'rgb(67, 67, 212)',
    'blue ',
   
   
]

    const handleClick = (section) => {
        console.log(`Clicked section ${section}`);
      };
    
      const generatePaths = () => {
        const paths = [];
    
        const centerX = 300;
        const centerY = 300;
        const radius = 300;
    
        for (let i = 0; i < 12; i++) {
          const startAngle = (i * 30) * (Math.PI / 180);
          const endAngle = ((i + 1) * 30) * (Math.PI / 180);
    
          const startX = centerX + Math.sin(startAngle) * radius;
          const startY = centerY - Math.cos(startAngle) * radius;
    
          const endX = centerX + Math.sin(endAngle) * radius;
          const endY = centerY - Math.cos(endAngle) * radius;
    
          const labelX = centerX + Math.sin((startAngle + endAngle) / 2) * (radius - 40);
          const labelY = centerY - Math.cos((startAngle + endAngle) / 2) * (radius - 40);
    
          paths.push(
            <g key={i}>
              <path
                d={`M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY} Z`}
                fill={colorArray[i]}
                onClick={() => handleClick(i + 1)}
              />
              
           <text  x={labelX} y={labelY} textAnchor="middle" fill="white"   onClick={() => handleClick(i + 1)}>
            {monthArray[i]}
           </text>
        
               
             
            </g>
          );
        }
    
        return paths;
      };
    

    return(
        <>
        <section className="gardoon">
        <div className="wrapper">
        
     <div className="container d-flex justify-content-center">

<svg width="600" height="600">
      <circle cx="300" cy="300" r="300" fill="lightgray" />
      {generatePaths()}
    </svg>

     </div>
     </div>
     </section>
        </>
    )
}


export default Gardoon;