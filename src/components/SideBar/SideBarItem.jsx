import React, {useState} from 'react'
import styles from './SideBar.module.css'
import { useSelector } from 'react-redux'
const SideBarItem = ({item, key}) => {

    const [open, setOpen] = useState(false)
    const {user} = useSelector(
        (state) => state.login)
    return (
        
    <div key={key} className={open ? styles.textOpen : styles.text} onClick={() => setOpen(!open)}>
        {
            !item.rol || user.roles?.find(e=> e.rl_codigo === item.rol) ? <div className={styles.sidebarTitle}>
            <span> 
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