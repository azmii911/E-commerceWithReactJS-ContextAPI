import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { auth } from '../../firebase';
import './Login.css'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [displayname, setdisplayname] = useState('');

    const [errorFromRegister,seterrorFromRegister] = useState('');
    const [errorFromLogin,seterrorFromLogin] = useState('');

    //Register
    const onRegisterHandler = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,pass).then(auther =>{
            //Account Created Successfully
            if(auther){                
            seterrorFromRegister('');
            auth.onAuthStateChanged(function(user) {
                user.updateProfile({
                    displayName: displayname
                });
              });
            history.push('/')
        }
        })
        .catch(err => seterrorFromRegister(err.message));
    }


    //Loginnn
    const onLoginHandler =  (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,pass).then((auther)=>{
            if(auther){
                seterrorFromLogin('');
                history.push('/')

            }
        })
        .catch(err=> seterrorFromLogin(err.message))
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 p-5">
                {/* SignUp */}
                
                    <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                        <input type="text" className="form-control mb-2" id="floatingInputR" 
                        placeholder="Raheel Azmi"
                        onChange={e => setdisplayname(e.target.value)}
                        />
                        <label for="floatingInput">Your First Name</label>
                        </div>
                        <div className="form-floating">
                        <input type="email" className="form-control mb-2" id="floatingInputR" 
                        placeholder="name@example.com"
                        onChange={e => setEmail(e.target.value)}
                        />
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control mb-4" id="floatingPasswordR"
                        placeholder="Password" 
                        onChange={e => setPass(e.target.value)}
                        />
                        <label for="floatingPassword">Password</label>
                        </div>
                        <label className="text-danger h6">{errorFromRegister}</label>
                        <button type="Submit" onClick={onRegisterHandler} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                    </main>

                </div>
                
                <div className="col-md-6 p-5">
                {/* loginn */}
                <main className="form-signin">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Log in</h1>
                    <div className="form-floating">
                    <input type="email" className="form-control mb-2" id="floatingInput" 
                    placeholder="name@example.com"                        
                    onChange={e => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control mb-4" id="floatingPassword"
                    placeholder="Password"
                    onChange={e => setPass(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                    </div>
                    <label className="text-danger h6">{errorFromLogin}</label>
                    <button type="submit" onClick={onLoginHandler} className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
                </form>
                </main>
                </div>
            </div>
        </div>
    )
}

export default Login
