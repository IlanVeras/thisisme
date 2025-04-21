import React from 'react'
import Step from '../Step/Step'
import styles from "../Process/styles.module.css"

export default function Process() {
    const [processo,setProcesso] = React.useState([
        {
            title: "Planejamento e Design",
            description: "Compreensão das necessidades do projeto, definição de funcionalidades, criação de wireframes e escolha das tecnologias adequadas. Tudo começa com uma base sólida."
        },
        {
            title: "Desenvolvimento",
            description: "Implementação do front-end com foco em performance e responsividade, utilizando tecnologias como React.js, HTML, CSS e Bootstrap. Integração com o back-end usando Node.js e MongoDB."
        },
        {
            title: "Testes e Deploy",
            description: "Testes de funcionalidade, usabilidade e performance. Após a validação, o projeto é publicado e monitorado para garantir estabilidade e eficiência."
        }
    ])
  return (
    <div>
      {
        processo.map((processo) => (
            <Step mainTxt={processo.title} secTxt={processo.description}/>
        ))
      }
    </div>
  )
}
