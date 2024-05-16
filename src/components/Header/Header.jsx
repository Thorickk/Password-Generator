import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Password Generator</h1>
			<i className={`${styles.icon} fa-solid fa-key`}></i>
		</header>
	)
}