import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './RowCart.css'
export default function RowCart (props) {
  return (
    <>
      <Row className={`${props.reverse ? 'reverse' : ''} Row_Box`}>
        <Col md={6} className='item text-center img text-md-right'>
          <img
            className='img_marasem'
            loading='lazy'
            src={props.src}
            alt='picture'
          />
        </Col>

        <Col md={6} className='item text-center'>
          <div className='h-100 d-flex flex-column justify-content-center text-white p-4 ml-md-3'>
            <h2 className='mb-3'> {props.title}</h2>
            <p>{props.desc1}</p>
            <p className='m-0'>{props.desc2}</p>
          </div>
        </Col>
      </Row>
    </>
  )
}
