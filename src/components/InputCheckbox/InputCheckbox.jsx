import styles from './InputCheckbox.module.css'

export function InputCheckbox({id, htmlFor, children}) {
	return (
		<div className={styles.box}>
			<input type='checkbox' id={id} />
			<label className={styles.label} htmlFor={htmlFor}>{children}</label>
		</div>
	)
}
