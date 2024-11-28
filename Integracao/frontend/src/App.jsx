import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  return (
    <div className='container-app'>
      
      <div className='container-form'>

        <label className='titulo'>Cadastrar-se</label>

        <div className='div-inputs'>

          <div className='div-dados'>

            <label className='labels'>Nome</label>
            <input className='inputs' type="text" placeholder='Informe seu nome completo'/>

          </div>

          <div className='div-dados'>

            <label className='labels'>Email</label>
            <input className='inputs' type="text" placeholder='Digite seu email'/>

          </div>

          <div className='div-dados'>

            <label className='labels'>Senha</label>
            <input className='inputs' type="text" placeholder='Crie uma senha'/>

          </div>

        </div>

        <button className='botao-cadastrar'>Cadastrar</button>

      </div>

    </div>
  )
}

export default App
