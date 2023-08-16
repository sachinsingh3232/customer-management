import React, { useEffect } from 'react'
import styles from '../../styles/userDetails.module.css'
import { useRouter } from 'next/router'

const index = () => {
    const router = useRouter()
    const user = router.query;
    useEffect(() => {
        if (!user.name) router.push('/')
    }, [user])

    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.flex}>
                    <span className={styles.heading}>Your Name</span>
                    <span>{user.name}</span>
                </div>
                <div className={styles.flex}>
                    <span className={styles.heading}>Email</span>
                    <span>{user.email}</span>
                </div>
                <div className={styles.flex}>
                    <span className={styles.heading}>PhoneNumber</span>
                    <span>{user.phoneNumber}</span>
                </div>
                <button
                    className={styles.updateButton}
                    onClick={() => {
                        router.push({
                            pathname: `/addUser`,
                            query: user,
                        }, `/addUser`);
                    }}
                >Update Details</button>
            </div>
        </div>
    )
}

export default index