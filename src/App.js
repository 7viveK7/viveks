import {BiUserPin} from 'react-icons/bi'
import {MdOutlineVisibility} from 'react-icons/md'
import {TbCurrentLocation} from 'react-icons/tb'
import './App.css';

function App() {
  return (
    <div className="login-page">
  <div  className='login-page-card' >
           <form>
            <div className='user-name'>
               <span className='icon-style'><BiUserPin/></span>
              <input type="text" placeholder=' User name'/>
            </div>
            <div className='user-name'>
              <span className='icon-style'><MdOutlineVisibility/></span>
              <input type="text" placeholder=' Password'/>
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
       
           </form>
  </div>
 
</div>
  );
}

export default App;
