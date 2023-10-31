
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import React, { useState } from 'react';
import Botao from '../Botao/Botao';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section>
            <form onSubmit={aoSalvar}>
                <div className="container p-5 my-5 border personalizacao">
                    <h2>Preencha os dados para criar o Card</h2>
                    <CampoTexto
                        obrigatorio={true}
                        label="Nome"
                        placeholder="Digite seu nome"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto
                        label="Imagem"
                        placeholder="Digite seu endereço de imagem"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Time"
                        itens={props.times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </div>
            </form>
        </section>
    );
}

export default Formulario;
