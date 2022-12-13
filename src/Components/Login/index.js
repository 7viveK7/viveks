import { useState } from 'react';
import {BiUserPin} from 'react-icons/bi'
import {MdOutlineVisibility} from 'react-icons/md'
import {TbCurrentLocation} from 'react-icons/tb'

 

function Login() {
  const [useName,setUserName ]=useState("")
  const [Password,setPassword]=useState("")
  const loginUserDetails =(event)=>{
    event.preventDefault()
alert(useName)
  }

  return (
    <div className="login-page">
  <div  className='login-page-card' >
           <form onSubmit={loginUserDetails}>
            <div className='user-name'>
               <span className='icon-style'><BiUserPin/></span>
              <input type="text" placeholder=' User name' onChange={e=>setUserName(e.target.value)}/>
            </div>
            <div className='user-name'>
              <span className='icon-style'><MdOutlineVisibility/></span>
              <input type="text" placeholder=' Password' Password={Password} onChange={e=>setPassword(e.target.value)}/>
            </div>
           
            <div className='user-name' >
              <span className=' icon-style'><TbCurrentLocation /></span>
              <select class="k" value={''} >
                    <option  >Select Location</option>
                    <option>hyder</option>
                    <option>hyder</option>
                    <option>hyder</option>
               </select>
            </div>
            <div className='user-name'>
              <button type="submit" >Login</button> 
            </div>
       
           </form>
  </div>
 
</div>
  );
}

export default Login;
