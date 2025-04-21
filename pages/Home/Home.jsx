import React from 'react'
import Square from "../../components/Square/Square"
import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import Process from '../../components/Process/Process'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <AboutMe/>
        <Process/>
    </div>
  )
}
