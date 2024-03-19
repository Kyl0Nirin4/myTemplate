
import './App.css'

const App = ()=>{
  return(
    <div className='back'>
      <div className='container'>
      <div className='left'></div>
      <div className='right'>
       <form action="">
       <h1>Welcome!</h1>
        <p className='mini'>log in your account</p>
        <label htmlFor="">Email</label>
        <input type="Email" placeholder='Usernme / yours@email.com' />
        <label htmlFor="">Password</label>
        <input type="Email" placeholder='Usernme / yours@email.com' />
        <button type='submit'>Login</button>
       </form>
      </div>
      </div>
    </div>
  );
}

export default App
