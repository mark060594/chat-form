import {React} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

//Components
import Header from './components/Header';
import Name from './components/Name';
import Birth from './components/Birth';

//Styles
import './ChatFormApp.css';

const ChatFormApp = () => {

  return (


    <>

        <Header/>
        <Name/>
        <Birth/>
        
  
    </>
    
  );
}

export default ChatFormApp;
