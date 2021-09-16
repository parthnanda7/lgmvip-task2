  
import React from 'react';
import './card.css';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { ViewColumn } from '@material-ui/icons';

const Card = ({ name, email, id, lname}) => {
  //Displays all the information in a card format
    return (

      <MDBCard style={{ width: '18rem',display:'flex', gridAutoFlow: 'row'}}>
        <MDBCardImage src={`https://reqres.in/img/faces/${id}-image.jpg`}  alt='...' position='top' />
        <MDBCardBody>
          <MDBCardText>
          <br />
          <h2>{name} {lname}</h2>
		  <br />
          <h3>{email}</h3>
        
      
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
  export default Card;
  

