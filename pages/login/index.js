import React, { useState } from 'react';
import styles from '../../styles/Login.module.css'
import axios from 'axios';
import { useRouter } from 'next/router';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert('Please wait!')
        try {
            const res = await axios.post(`${BASE_URL}/api/login`, {
                userName: username,
                password,
            });
            console.log(res)
            // if (res.status === 200) { router.push("/"); }
        } catch (err) {
            console.log(err)
            setError(true);
        }
    };

    return (
        <div className={styles.login_form_container}>
            <form className={styles.login_form} onSubmit={handleSubmit}>
                <div className={styles.form_group}>
                    <label htmlFor="username" className={styles.label}>Username:</label>
                    <input
                        type="text"
                        className={styles.input}
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="password" className={styles.label}>Password:</label>
                    <input
                        type="password"
                        className={styles.input}
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className={styles.button} type="submit">Login</button>
            </form>
            {error && <span className={styles.error}>Wrong Credentials!</span>}
        </div >
    );
}

export default LoginForm;
