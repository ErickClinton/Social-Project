import styles from './Header.module.css'


export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.position}>
                <button className={styles.button}  type="submit">Login</button>
                <button className={styles.button}  type="submit">Sign up</button>
            </div>
        </header>
    )
}