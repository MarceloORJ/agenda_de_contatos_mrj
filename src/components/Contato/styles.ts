import styled from 'styled-components'
import { Button } from '../../styles'

export const CardContato = styled.div`
  width: 100%;
  display: block;
  border-radius: 6px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: #fff5e0;
  box-shadow: rgba(0, 0, 0, 0.35) 1px 2px 3px;
`

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  ul {
    textarea:first-child {
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`

export const BotaoCancelarEDeletar = styled(Button)`
  color: #fff;
  background-color: #be3144;
  padding: 4px 8px;
`

export const BotaoEditar = styled(Button)`
  color: #fff;
  background-color: #053b50;
  padding: 4px 8px;
`

export const BotaoSalvar = styled(Button)`
  color: #fff;
  background-color: #74e291;
  padding: 4px 8px;
`

export const Descricao = styled.textarea`
  display: inline;
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
  resize: none;
  border: none;
  background-color: transparent;
  outline: none;
`
