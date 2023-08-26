import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import orkidehData from '../../Context/Context'
import './ContentMarasem.css'
import TopTitle from './TopTitle'
import RowCart from './RowCart'

export default function ContentMarasem (props) {
  const contextData = useContext(orkidehData)
  console.log(contextData.marasemData)

  return (
    <div className='content_marasem' id='story'>
      <Container fluid className='pt-5 pb-3'>
        <TopTitle />

        <Container fluid className='timeline position-relative content p-0'>
          {contextData.marasemData.map(item => (
            <RowCart {...item} />
          ))}
        </Container>
      </Container>
    </div>
  )
}
