const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
        <Course course={course.name} name1={course.parts[0].name} exercises1={course.parts[0].exercises} name2={course.parts[1].name} exercises2={course.parts[1].exercises} name3={course.parts[2].name} exercises3={course.parts[2].exercises}></Course> 
  )
}

const Header = ({course}) => {

  return(
    <h1>{course}</h1>
  )
}

const Content = ({name1, name2, name3, exercises1, exercises2, exercises3}) => {
  return(
    <>
      <Part name={name1} exercises={exercises1}></Part>
      <Part name={name2} exercises={exercises2}></Part>
      <Part name={name3} exercises={exercises3}></Part>
    </>
  )
}

const Part = ({name, exercises}) =>{
  return(
    <p>{name} {exercises}</p>
  )
}

const Total = ({exercises1,exercises2,exercises3}) =>{
  return(
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const Course = ({course,name1,exercises1,name2,exercises2,name3,exercises3}) =>{
return(
  <div>
      <Header course={course}></Header>
      <Content name1={name1} exercises1={exercises1} name2={name2} exercises2={exercises2} name3={name3} exercises3={exercises3}></Content>
   
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total>
    </div>)

}
export default App