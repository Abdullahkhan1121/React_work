import React from 'react'

const Courses = ({courses=[]}) => {
    
  return (
  <div className="container">

    <h1 className='display-3 text-center text-primary my-3'>Our Top Courses</h1>
    <div className="row">

      {
        courses.map((course,index)=>{
          return(
                 <div className="col-lg-3 col-md-6 col-sm-12 my-2">
        <div className="card" style={{height:'500px'}}>
  <img src={course.thumbnail} className="card-img-top" alt="..." height={280}/>
  <div className="card-body">
    <h5 className="card-title">{course.title}</h5>
    <p className="card-text">
     {course.description}.
    </p>
    
    <a href="#" className="btn btn-primary">
      Show Details
    </a>
  </div>
</div>

      </div>
          )

        })
      }


    </div>
  </div>
  )
}

export default Courses
