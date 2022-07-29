import React, {useState} from 'react'
import styles from './SideBar.module.css'

const SideBarItem = ({item, key}) => {

    const [open, setOpen] = useState(false)
    return (
    <div key={key} className={open ? styles.textOpen : styles.text} onClick={() => setOpen(!open)}>
        
        <div className={styles.sidebarTitle}>
            <span> 
                {item.icon}
                {item.title}
            </span>
        </div>
    
    
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