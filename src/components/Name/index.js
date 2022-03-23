import React, {useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';


//Image
import User from '../../images/user.jpg';

//Styles
import './Name.css';



const Name = () => {


   /*  const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [lastNameFirst, setLastNameFirst] = useState('');
    const [lastNameSecond, setLastNameSecond] = useState(''); */
  
    
    //Handlers
  /*   const handleChangeFirstName = (event) => setFirstName(event.target.value);
    const handleChangeSecondName = (event) => setSecondName(event.target.value);
    const handleChangeLastNameFirst = (event) => setLastNameFirst(event.target.value);
    const handleChangeLastNameSecond = (event) => setLastNameSecond(event.target.value); */
        
   

    const [ formValues, handleInputChange] = useForm( {
        firstName: '',
        secondName:'',
        lastNameFirst: '',
        lastNameSecond:''

    })


    const { firstName, secondName, lastNameFirst, lastNameSecond } = formValues;
    
   
console.log(firstName, 'el nombre')



  return (

    <Container fluid className='main-name-container'>

        <Row className='name-container justify-content-center'>

            <Col xs={4} md={3} className='user-img-container'>
                <Image fluid  src={User} className='user-img' />
            </Col>

            <Col xs={8} md={9} className='form-container'>

                <h3> ¿Cuál es tu nombre? </h3>
                <input type='text' name='firstName' placeholder='Nombre'  value={firstName} onChange={handleInputChange}/>
                <input type='text' name='secondName' placeholder='Segundo Nombre' value={secondName} onChange={handleInputChange} />
                <input type='text' name='lastNameFirst' placeholder='Apellido Paterno' value={lastNameFirst} onChange={handleInputChange} />
                <input type='text' name='lastNameSecond' placeholder='Apellido Materno' value={lastNameSecond} onChange={handleInputChange} />
                
            </Col>

        </Row>

        <Row className='name-screen-container justify-content-end'>

            <Col className='name-screen' xs={10}>
                
                

            </Col>

        </Row>

    </Container>


  )
}



export default Name;