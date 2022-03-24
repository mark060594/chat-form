import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';
import validator from 'validator';
import validateOnlyNum from '../../helpers/validateOnlyNum';



//Image
import User from '../../images/user.jpg';


const Contact = ({checkContact, enableDispatch}) => {

    

    const dispatch = useDispatch();

    const [formError, setFormError] = useState(false);
    const [formErrorMsg, setFormErrorMsg] = useState('');

    //Custom hook
    const [ formValues, handleInputChange] = useForm({
        email: '',
        phone:'',
        
    })
    
    const { email, phone } = formValues;


    //Validate form
    const isValidate = () => {

        if( email.trim().length === 0){
            setFormError(true);
            setFormErrorMsg(' El email es requerido ');
        } else if(phone.trim().length === 0 ){
            setFormError(true);
            setFormErrorMsg(' el télefono es requerido ');
            
        }  else if((validateOnlyNum(phone) === false && phone !== '') || (phone.length < 10 && phone !== '' ))  {
            setFormError(true);
            setFormErrorMsg(' Número de télefono invalido ');
            
        } else if( !validator.isEmail(email) ) {
            setFormError(true);
            setFormErrorMsg(' Email invalido ');
            
        } else {
            setFormError(false);
        }

    }

    // Object to send in the action
    const dataUser = {
        email: email,
        phone: phone,
    }
    
    //Redux Action
    const setDataUser = (dataUser) => ({
        type: types.dataUser,
        payload:dataUser
    })


    //useEffect to do Dispatch
    useEffect(() => {

        dispatch(setDataUser(dataUser));

    },[enableDispatch]);
    


    useEffect(() => {

        isValidate();
        checkContact(formError);

    },[email,phone])
   



  return (

    <Container fluid className='main-name-container'>

        <Row className='name-container justify-content-center'>

            <Col xs={4} md={3} className='user-img-container'>
                <Image fluid  src={User} className='user-img' />
            </Col>

            <Col xs={8} md={9} className='form-container'>

                <form>
                    <h3> ¿Cuál es tu fecha de nacimiento? </h3>
                    <input type='email'
                           name='email' 
                           placeholder='Correo'  
                           value={email} 
                           onChange={handleInputChange}/>

                    <input type='text' 
                           name='phone' 
                           placeholder='Télefono' 
                           value={phone} 
                           onChange={handleInputChange} />

                </form>

            </Col>

        </Row>

        <Row className='name-screen-container justify-content-end'>

            <Col className='name-screen' xs={10}>

                {
                    formError
                        ? <p> {formErrorMsg} </p>
                        : <>
                            <p>{`Correo electrónico:${email}` }</p>
                            <p>{`Télefono celular:${phone}`}</p>
                          </>
            }
                
            </Col>

             
        </Row>



    </Container>


  )
}



export default Contact;