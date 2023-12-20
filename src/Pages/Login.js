import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}

from 'mdb-react-ui-kit';
import './Login.css';
const Login = () => {
  return (
    <div>

<MDBContainer fluid   >

<MDBRow  className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard id='logincon-vik' className='bg  my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2  > Retailer Login</h2><br/>
        <p >Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100'  label='Email address or User Id'  type='email' size="lg"/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100'  label='Password'  type='password' size="lg"/>

        <p ><a  href="#!">Forgot password?</a></p>
        <MDBBtn outline className='mx-2 px-5'  size='lg'>
          Login
        </MDBBtn>
        <br/>

        

       
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>


    </div>
  )
}

export default Login