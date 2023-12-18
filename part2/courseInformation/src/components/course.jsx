const Header = ({course}) => {
    return(
      <h1>{course}</h1>
    )
  }
  
const Content = ({parts}) => {
    return(
    <>
    {parts.map(part=> <Part key={part.id} name= {part.name} exercises={part.exercises}></Part>)}
    </>  
    )
  }
  
const Part = ({name, exercises}) =>{
    return(
      <p>{name} {exercises}</p>
    )
  }
  
const Total = ({exercises}) =>{
  
    return(
      <p>Number of exercises {
        exercises.reduce(
          (accumulator, currentValue)=> 
            accumulator+currentValue
            )
        }</p>
    )
  }
  
const Course = ({course}) =>{
  return(
    <div>
        <Header course={course.name}></Header>
        <Content parts={course.parts.map(part => part)} />
        <Total exercises={course.parts.map(part=> part.exercises)}></Total>
    </div>)
  
  }

  export default Course;