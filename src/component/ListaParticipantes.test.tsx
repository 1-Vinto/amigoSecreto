import React from "react"
import { RecoilRoot } from "recoil"
import {render, screen} from '@testing-library/react'
import ListaParticipantes from "./ListaParticipantes"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"

jest.mock('../state/hook/useListaDeParticipante', () =>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('uma lista vazia de participantes', () =>{
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('Deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes/>
        </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('uma lista preenchida de participantes', () => {
    const participantes = ['Ana', 'Catarina']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('Deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes/>
        </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})