import React, { useState } from 'react'
import styles from '../../styles/addUser.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const index = () => {
    const router = useRouter()
    const user = router.query;
    const [name, setName] = useState(user?.name || "")
    const [email, setEmail] = useState(user?.email || "")
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "")
    const [err, setErr] = useState(false)

    // useEffect(() => {
    //     if () router.push('/')
    // }, [])
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const resp = user.name ? await axios.put(`${BASE_URL}/api/user/${user.id}`, {
                name,
                email,
                phoneNumber
            }) :
                await axios.post(`${BASE_URL}/api/user/`, {
                    name,
                    email,
                    phoneNumber
                });
            if (resp.status === 200) {
                user.name ? router.push({ pathname: `/userDetails/${user._id}`, query: user },
                    `/userDetails/${user._id}`) : router.push('/')
            }
        } catch (e) {
            setErr(true);
            console.log(e)
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.container1} onSubmit={submitHandler}>
                <input className={styles.input} type='text' required placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className={styles.input} type='email' required placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className={styles.input} type='phone' pattern="[0-9]{10}" required placeholder='10 digit PhoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <button className={styles.button} >Add</button>
                {err && <span className={styles.error}>User Already Exist</span>}
            </form>
        </div>
    )
}

export default index