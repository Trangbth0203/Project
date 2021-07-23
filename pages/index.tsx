import { NextPage } from "next"
import { Sidebar } from '../src/components/widgets/sidebar'


const Home: NextPage = () => {
  return (
  
  <>
    {/* Sidebar */}

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
