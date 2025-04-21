import React from 'react'
import Square from "../../components/Square/Square"
import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <AboutMe/>
      {/* {
        [...Array(10)].map((_, i) => (
            <Square/>
        ))
      } */}
    </div>
  )
}
