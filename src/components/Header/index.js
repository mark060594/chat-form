import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsQuestionSquareFill } from 'react-icons/bs';


//Styles
import './Header.css';


const Header = () => {
  return (


    <Container fluid className='header-container'>

        <Row className='row-container row-header-top-container'>

            <Col xs={8}  className='left-container' >
                   
                <h1> Titulo del formulario </h1>
            
            </Col>

            <Col xs={4}  className='right-container'>
                <BsQuestionSquareFill className='icon'/>
            </Col>

        </Row>

        <Row className=' row-container row-header-bottom-container'>
            <Col xs={12} className='left-bottom-container'>
                <AiOutlineClockCircle className='icon'/>
                <p> En menos de  minutos </p> 
            </Col>
        </Row>


    </Container>


  )
}


export default Header;