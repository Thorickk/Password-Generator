import styles from './InputCheckbox.module.css'

export function InputCheckbox({id, htmlFor, children, onChange, checked}) {
	return (
		<div className={styles.box}>
			<input type='checkbox' id={id} onChange={onChange} checked={checked}/>
			<label className={styles.label} htmlFor={htmlFor}>{children}</label>
		</div>
	)
}
