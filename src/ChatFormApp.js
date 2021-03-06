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

  // get user data from redux
  const {data} = useSelector(state => state);

 
  const [nameError, setNameError] = useState(true);
  const [birthError, setBirthError] = useState(true);
  const [contactError, setContactError] = useState(true);
  const [enableDispatch, setEnableDispatch] = useState(false);
  const [formError, setFormError] = useState(true);
  

console.log(contactError)

  const checkName = (state) => setNameError(state);
  const checkBirth = (state) => setBirthError(state);
  const checkContact = (state) => setContactError(state);
 

    
  //Handle to send data to redux store
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
                !formError
                    ? <>

                      <p>{`Fecha de Nacimiento: ${data.day} ${data.month} ${data.year}`}</p>
                      <p>{`Correo Electr??nico: ${data.email}`}</p>
                      <p>{`Tel??fono celular: ${data.phone}`}</p>
                      <p>{`Nombre: ${data.firstName} ${data.secondName} ${data.lastNameFirst} ${data.lastNameSecond}`}</p>
              
                    </>
                    : <p> Completa todos los campos</p>
              }
                  
            </Col>
          </Row>
          
      </>
  
    
  );
}

export default ChatFormApp;
