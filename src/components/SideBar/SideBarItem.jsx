import React, {useState} from 'react'
import styles from './SideBar.module.css'
import * as AiIcons from 'react-icons/ai';
import { useSelector } from 'react-redux'
const SideBarItem = ({item, key}) => {

    const [open, setOpen] = useState(false)
    const {user} = useSelector(
        (state) => state.login)
    return (
        
    <div key={key} className={open ? styles.textOpen : styles.text}>
        {/**Si le Item no tiene un rol asignado, es un Menú (Nivel 0) */}
        {
            !item.rol || 
            user.roles?.find(e=> e.rl_codigo === item.rol) || 
            user.roles?.find(e=> e.rl_codigo === "1") && !item.unique
            ? <div className={styles.sidebarTitle}>
            <span>
                <AiIcons.AiOutlineArrowDown  onClick={() => setOpen(!open)} /> 
                {item.icon}
                {item.title}
            </span>

        </div> : <option value="*" disabled>{item.title}</option>
        }
            <div className={styles.sidebarContent}>
             {
            open && item.options ? 
            
                
            item.options.map((item, index) =>
            
            
                <SideBarItem item={item} key={index}/>

            
            
            )
                
            

             : null
        }
    </div>
      
    
    

   
    </div>
    )
    
}

export default SideBarItem