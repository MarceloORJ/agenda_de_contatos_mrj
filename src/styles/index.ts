import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rajdhani', sans-serif;
    list-style: none;
  }

  body{
    background-color: #F39F5A;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Campo = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  background-color: #f1f1f1;
  border: none;
  border-radius: 32px;
  color: #666666;
  outline: none;
  letter-spacing: 1px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 1px 2px 3px;
`

export const Button = styled.button`
  padding: 8px 16px;
  cursor: pointer;

  font-weight: bold;
  background-color: #053b50;
  color: #fff;

  border: none;
  border-radius: 16px;
`

export default EstiloGlobal
