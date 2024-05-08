import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate=useNavigate()

    //login
    const handleLogin = async() => {
            const provider =await new GoogleAuthProvider();
            return signInWithPopup(auth,provider)      
    }
    navigate('/todo')
    

    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>
                <Row>
                    <Col md={6}>
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg" alt="no image" />
                    </Col>
                    <Col md={6} className='text-center mt-5'>
                        <h2 className='mt-5 mb-5' style={{ fontFamily: '"Cinzel", serif' }}>LOGIN</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error suscipit sapiente tenetur reiciendis debitis necessitatibus quas consequuntur expedita inventore dolorem rem officiis asperiores earum hic nisi omnis dolor, atque odit.</p>
                        <button onClick={handleLogin} className='btn btn-primary p-2 mt-4'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s" style={{ height: '30px' }} alt="no image" /> Sign In Using Google</button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Login