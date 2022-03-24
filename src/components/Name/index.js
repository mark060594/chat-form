import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';


//Image
import User from '../../images/user.jpg';

//Styles
import './Name.css';



const Name = () => {


    const [formError, setFormError] = useState(false);
    const [formErrorMsg, setFormErrorMsg] = useState('');

    const [ formValues, handleInputChange] = useForm({
        firstName: '',
        secondName:'',
        lastNameFirst: '',
        lastNameSecond:''

    })
    const { firstName, secondName, lastNameFirst, lastNameSecond } = formValues;



    const isValidate = () => {

        if( firstName.trim().length === 0){
            setFormError(true);
            setFormErrorMsg(' El nombre es requerido');
        } else if(lastNameFirst.trim().length === 0 ){
            setFormError(true);
            setFormErrorMsg(' El primer apellido es requerido');
        } else if(lastNameSecond.trim().length === 0 ){
            setFormError(true);
            setFormErrorMsg(' El segundo apellido es requerido');
        } else {
            setFormError(false);
        }

    }
    

    useEffect(() => {

        isValidate();

    },[firstName,secondName,lastNameFirst,lastNameSecond])
   



  return (

    <Container fluid className='main-name-container'>

        <Row className='name-container justify-content-center'>

            <Col xs={4} md={3} className='user-img-container'>
                <Image fluid  src={User} className='user-img' />
            </Col>

            <Col xs={8} md={9} className='form-container'>

                <form>
                    <h3> ¿Cuál es tu nombre? </h3>
                    <input type='text'
                           name='firstName' 
                           placeholder='Nombre'  
                           value={firstName} 
                           onChange={handleInputChange}/>

                    <input type='text' 
                           name='secondName' 
                           placeholder='Segundo Nombre' 
                           value={secondName} 
                           onChange={handleInputChange} />

                    <input type='text' 
                           name='lastNameFirst' 
                           placeholder='Apellido Paterno' 
                           value={lastNameFirst} 
                           onChange={handleInputChange} />

                    <input type='text' 
                           name='lastNameSecond' 
                           placeholder='Apellido Materno' 
                           value={lastNameSecond} 
                           onChange={handleInputChange} />
                </form>

            </Col>

        </Row>

        <Row className='name-screen-container justify-content-end'>

            <Col className='name-screen' xs={10}>

                {
                    formError
                        ? <p> {formErrorMsg} </p>
                        : <p>{`${firstName} ${secondName} ${lastNameFirst} ${lastNameSecond}`}</p>
                }
                
            </Col>

        </Row>

    </Container>


  )
}



export default Name;