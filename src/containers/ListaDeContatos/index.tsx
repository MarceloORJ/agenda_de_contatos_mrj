import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import { MainContainer } from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <MainContainer>
      <ul>
        {itens.map(
          (contact: {
            id: number
            name: string
            email: string
            tell: number
          }) => (
            <li key={contact.name}>
              <Contato
                id={contact.id}
                name={contact.name}
                email={contact.email}
                tell={contact.tell}
              />
            </li>
          )
        )}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
