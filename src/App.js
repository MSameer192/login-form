import './App.css';
import React, { useState } from 'react';


function App() {


  const [loginDetail, setLoginDetail] = useState()
  const [loginPswd, setloginPswd] = useState()


  function updateName(event) {
    event.preventDefault();
    alert(`User Email: ${loginDetail} and Password: ${loginPswd}`)
  }


  return (
    <div className="container mt-5" id="form" > 
                <form className="mt-5 px-3" >
                    <div className="my-5">
                        <label htmlFor="userName" className="form-label">Email</label>
                        <input type="email" className="form-control" id="userName" onChange={(event)=>{setLoginDetail(event.target.value)}}/>
                    </div>
                    <div className="mb-3 my-5">
                        <label htmlFor="password" className="form-label">password</label>
                        <input type="password" className="form-control" id="password" onChange={(event)=>{setloginPswd(event.target.value)}} />
                    </div>

                    <div> 
                        <button  type="submit" className="btn btn-primary my-5 px-5" onClick={updateName}>LOGIN</button>
                    </div>
                </form>
            </div>
  );

}

export default App;
