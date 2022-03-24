import React, {useState, useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';


//Components
import Header from './components/Header';
import Name from './components/Name';
import Birth from './components/Birth';
import Contact from './components/Contact';

//Styles
import './ChatFormApp.css';

const ChatFormApp = () => {

  const {data} = useSelector(state => state);

 
  const [nameError, setNameError] = useState(true);
  const [birthError, setBirthError] = useState(true);
  const [contactError, setContactError] = useState(true);
  const [enableDispatch, setEnableDispatch] = useState(false);
  const [formError, setFormError] = useState(false);
  



  const checkName = (state) => setNameError(state);
  const checkBirth = (state) => setBirthError(state);
  const checkContact = (state) => setContactError(state);
 

    
  
  const handleSend = () => {

    if(!nameError && !birthError && !contactError){
        setEnableDispatch(true);
        setFormError(false);
    }else {
      setFormError(true);
      setEnableDispatch(false);
    }

  }




  return (

   
      <>

          <Header/>
          <Name checkName={checkName} enableDispatch={enableDispatch}/>
          <Birth checkBirth={checkBirth} enableDispatch={enableDispatch}/>
          <Contact checkContact={checkContact} enableDispatch={enableDispatch}/>

          <Row className='data-send-container justify-content-end'>
            <Col xs={8} md={9} className='msg-container'>
              <p> Si tus datos son correctos porfavor continua</p>
            </Col>
          </Row>
          <Row className='data-send-container justify-content-center'>
            <Col xs={12} className='btn-container'>
                  <Button onClick={handleSend} className='btn'> Iniciar </Button>
            </Col>
          </Row>

          <Row className='data-container justify-content-center'>
            <Col xs={10} className='data'>

              {
                formError
                    ? <p> Completa todos los campos </p>
                    : <>

                          <p>{`Fecha de Nacimiento: ${data.day} ${data.month} ${data.year}`}</p>
                          <p>{`Correo Electrónico: ${data.email}`}</p>
                          <p>{`Teléfono celular: ${data.phone}`}</p>
                          <p>{`Nombre: ${data.firstName} ${data.secondName} ${data.lastNameFirst} ${data.lastNameSecond}`}</p>
                    
                      </>
              }
                  
            </Col>
          </Row>
          
      </>
  
    
  );
}

export default ChatFormApp;
