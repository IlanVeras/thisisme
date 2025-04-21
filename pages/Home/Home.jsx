import React from 'react'
import Square from "../../components/Square/Square"
import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import Process from '../../components/Process/Process'
import ControlledCarousel from '../../components/ControlledCarousel/ControlledCarousel'
import CardProjeto from '../../components/CardProjeto/CardProjeto'
import ProjetosObj from "../../public/Data/DataProjects.json"

export default function Home() {
    console.log(ProjetosObj)
  return (
    <div>
        {/* <NavBar/> */}
        <AboutMe/>
        <Process/>
        {
            ProjetosObj.map((projeto,i) => (
                <CardProjeto title={projeto.nome} description={projeto.descricao} srcImage={projeto.imagem} key={i}/>
            ))
        }
    </div>
  )
}
