import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>
				Password Generator<i className={`${styles.icon} fa-solid fa-key`}></i>
			</h1>
		</header>
	)
}
