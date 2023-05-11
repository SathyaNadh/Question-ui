import React from 'react'
import styles from '@/Components/Loader/Loader.module.css'
 export const Loader = () => {
  return (
     <div>
    
    <div className='mask'> </div>
        <img  className={styles.Loaderimg} src='loading-loader.gif'/>   
    </div>
  )
}