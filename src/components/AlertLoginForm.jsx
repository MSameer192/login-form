import React, { useState } from 'react';

export default function AlertLoginForm() {

    const [loginEmail, setLoginEmail] = useState()
    const [loginPswd, setloginPswd] = useState()

    function updateName(event) {
        event.preventDefault();
        alert(`User Email: ${loginEmail} and Password: ${loginPswd}`)
      }
    
  return (
    <section class="vh-100" style={{backgroundColor:'#508bfc'}}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{bordeRadius: "1rem"}}>
              <div class="card-body p-5 text-center">

                <h3 class="mb-5">Sign in</h3>

                <div class="form-outline mb-4">
                  <label class="form-label" for="typeEmailX-2">Email</label>
                  <input type="email" id="typeEmailX-2" class="form-control form-control-lg" onChange={(event)=>{setLoginEmail(event.target.value)}}/>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="typePasswordX-2">Password</label>
                  <input type="password" id="typePasswordX-2" class="form-control form-control-lg" onChange={(event)=>{setloginPswd(event.target.value)}} />
                </div>
                <button class="btn btn-primary btn-lg btn-block px-5" type="submit" onClick={updateName}>Login</button>

                <hr class="my-4"/>

                <button class="btn btn-lg btn-block btn-primary" style={{backgroundColor:'#dd4b39'}}
                  type="submit"><i class="fab fa-google me-2  px-2"></i> Sign in with google</button>
                <button class="btn btn-lg btn-block btn-primary my-2" style={{backgroundColor:'#3b5998'}}
                  type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
