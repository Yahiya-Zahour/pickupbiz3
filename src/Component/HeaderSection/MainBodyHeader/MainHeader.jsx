import React from 'react';
import "./MainHeader.css"

import { Form, FormGroup,Button} from 'react-bootstrap';




export const MainHeader = () => {
    return (
        <div>
            <div className="cr7">
                <img className="pmu" src="./Assets/pmu.png" />
                <Form className="login-form">

                    <h1 className="in">Guest Login </h1>
                    <br />
                    <FormGroup>
                        <label className="Email">Email</label>
                        <br />
                        <input className="1email" type="Email" placeholder="Enter Your Email" />
                    </FormGroup>
                    <br /><br />
                    <FormGroup>
                        <label className="password">Password</label>
                        <br />
                        <input className="1password" type="password" placeholder="Enter Your Password" />
                    </FormGroup>
                    <br/>
                    <form><input type="checkbox"/>Accept Terms & Condition</form>
                 <br/>
                  <Button variant="info">Login</Button>{' '}
                  <br/><br/>
                  <button className="forget">Forget password</button> 
                  <button className="forget">Forget password</button> 
                  
                  <button className="forget">Forget password</button> 
                  <button className="forget">Forget password</button> 
                   <button className="forget">Forget password</button>  <button className="forget">Forget password</button> 
                   <button className="forget">Forget password</button> 
                  <button className="forget">Forget password</button> 
                  
                  <button className="forget">Forget password</button> 
                  <button className="forget">Forget password</button> 
                   <button className="forget">Forget password</button>  <button className="forget">Forget password</button> 
                   <button className="forget">Forget password</button> 
                  <button className="forget">Forget password</button> 
                  
                  <button className="forget">Forget password</button> 
                  <button className="forget">Forget password</button> 
                   <button className="forget">Forget password</button>  <button className="forget">Forget password</button> 
               
                </Form>
            </div>
        </div>
    );
}