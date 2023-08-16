import { useRouter } from "next/router"
import styles from "../styles/userCard.module.css"
import axios from "axios"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const PizzaCard = ({ user }) => {
    const router = useRouter()

    const handleDelete = async () => {
        try {
            const resp = await axios.delete(`${BASE_URL}/api/user/${user._id}`)
            if (resp.status === 200) router.push('/')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={styles.container}>
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
            <div className={styles.flex}>
                <button
                    className={styles.view}
                    onClick={() => {
                        router.push(
                            { pathname: `/userDetails/${user._id}`, query: user },
                            `/userDetails/${user._id}`
                        );
                    }}
                >View</button>
                <button className={styles.delete} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default PizzaCard