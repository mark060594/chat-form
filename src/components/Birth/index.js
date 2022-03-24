import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';


//Image
import User from '../../images/user.jpg';

//Styles
import './Birth.css';



const Birth = () => {


    const [formError, setFormError] = useState(false);
    const [formErrorMsg, setFormErrorMsg] = useState('');

    const [ formValues, handleInputChange] = useForm({
        day: '',
        month:'',
        year: ''
        
    })
    const { day, month, year } = formValues;



    const isValidate = () => {

        if( day.trim().length === 0){
            setFormError(true);
            setFormErrorMsg(' El día es requerido ');
        } else if(month.trim().length === 0 ){
            setFormError(true);
            setFormErrorMsg(' El mes es requerido  ');
        } else if(year.trim().length === 0 ){
            setFormError(true);
            setFormErrorMsg(' El año es requerido ');
        } else {
            setFormError(false);
        }

    }
    

    useEffect(() => {

        isValidate();

    },[day,month,year])
   



  return (

    <Container fluid className='main-name-container'>

        <Row className='name-container justify-content-center'>

            <Col xs={4} md={3} className='user-img-container'>
                <Image fluid  src={User} className='user-img' />
            </Col>

            <Col xs={8} md={9} className='form-container'>

                <form>
                    <h3> ¿Cuál es tu fecha de nacimiento? </h3>
                    <input type='text'
                           name='day' 
                           placeholder='Día'  
                           value={day} 
                           onChange={handleInputChange}/>

                    <input type='text' 
                           name='month' 
                           placeholder='Mes' 
                           value={month} 
                           onChange={handleInputChange} />

                    <input type='text' 
                           name='year' 
                           placeholder='Año' 
                           value={year} 
                           onChange={handleInputChange} />

                </form>

            </Col>

        </Row>

        <Row className='name-screen-container justify-content-end'>

            <Col className='name-screen' xs={10}>

                {
                    formError
                        ? <p> {formErrorMsg} </p>
                        : <p>{`${day} ${month} ${year} `}</p>
                }
                
            </Col>

        </Row>

    </Container>


  )
}



export default Birth;