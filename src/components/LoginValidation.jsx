import React, { useState } from 'react';
import Alert from './Alert';

export default function LoginValidation() {

  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  






  return (
    <>

        <Alert name={name} email={email} password={password} />
        

        <form className='mt-5 p-5 container-fluid' onSubmit={(event)=>{event.preventDefault()}} style={{width: '500px', border: '2px solid gray', height:'500px'}}>


            <h3>My Login Form </h3>

            <div className="mb-3 mt-5">
                <label htmlFor="exampleInputName" className="form-label">
                Complete Name {name === '' ? ( 
                <span className='ms-2 mt-2' style={{color: 'red'}}> ( Name Input Field is Empty ) 👇🏻</span>
                ): null}
                </label>
                <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={name}
                onChange={(event)=>{setName(event.target.value)}}
                style={{border: name === '' ? '2px solid red':'2px solid grey' }}
                placeholder='username'
                />
            </div>


            <div className="mb-3">
                <label htmlFor="exampleInputEmail1 d-flex" className="form-label">
                    Email address {email === '' ? ( 
                <span className='ms-2 mt-2' style={{color: 'red'}}> ( Email Input Field is Empty ) 👇🏻</span>
                ): null}
                </label> 

                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
                style={{border: email === '' ? '2px solid red':'2px solid grey' }}
                placeholder='email@gamil.com'
                />
 

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Password {password === '' ? ( 
                <span className='ms-2 mt-2' style={{color: 'red'}}> ( Password Input Field is Empty ) 👇🏻</span>
                ): null}
                </label>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(event)=>{setPassword(event.target.value)}}
                style={{border: password === '' ? '2px solid red':'2px solid grey' }}
                placeholder='password'
                />
            </div>

                       

 

            <button type="submit" className="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
                Submit
            </button>
            <p style={{fontSize: '0.9rem', color:'grey'}} className="mt-2">Note: please click on Submit button after fill above all inputs </p>
            
        </form>

    </>
  );
}
