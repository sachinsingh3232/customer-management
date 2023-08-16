import React from 'react'
import styles from '../styles/navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const logOutHandler = async () => {
        try {
            
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={styles.container}>
            <li onClick={() => router.push('/')} className={styles.li}>Home</li>
            <li onClick={() => router.push('/addUser')} className={styles.li}>AddUser</li>
            <li onClick={logOutHandler} className={styles.li}>LogOut</li>
        </div>
    )
}

export default Navbar