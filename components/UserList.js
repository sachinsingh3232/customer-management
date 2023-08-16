import styles from "../styles/userList.module.css"
import UserCard from "./UserCard"
const pizzaList = ({ userList }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {userList?.map((user) => (
                    <UserCard key={user._id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default pizzaList