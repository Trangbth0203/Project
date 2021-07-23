import { NextPage } from "next"

const Home: NextPage = () => {
  return (
  
  <>
   <div className="sidebar">
     <a className="active" href="#home">Home</a>
     <a href="#news">Employees</a>
     <a href="#contact">Deparment</a>
     <a href="#about">Uses</a>
  </div>
    </>
  )
}

export default Home
