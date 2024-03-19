
import './App.css'

const App = ()=>{
  return(
    <div className='back'>
      <div className='container'>
      <div className='left'></div>
     <form action="">
     <div className='right'>
        <h1>Welcome!</h1>
        <p className='mini'>log in your account</p>
       <p>Email :</p>
        <input type="Email" placeholder='Usernme / yours@email.com' required/>
       <p>Password :</p>
        <input type="password" placeholder='1 - 8 charracter' required/>
     <button type='submit' className='login-button'>Login</button>
      </div> 
     </form>
      </div>
    </div>
  );
}

export default App
