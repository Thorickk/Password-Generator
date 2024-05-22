import { useState } from 'react'
import styles from './App.module.css'
import { Button } from './components/Button/Button'
import { Header } from './components/Header/Header'
import { InputCheckbox } from './components/InputCheckbox/InputCheckbox'

const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>/?'
const numbers = '0123456789'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnoqprstuvwxyz'

function App() {
	const [newPassword, setNewPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [passwordLength, setPasswordLength] = useState(10)
	const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(false)
	const [includeNumbers, setIncludeNumbers] = useState(false)
	const [includeUppercase, setIncludeUppercase] = useState(false)

	function handleGeneratePassword(passwordLength) {
		let password = ''
		let chars = lowercase

		includeSpecialCharacters ? (chars += specialCharacters) : chars
		includeNumbers ? (chars += numbers) : chars
		includeUppercase ? (chars += uppercase) : chars

		for (let i = 0; i < passwordLength; i++) {
			password += chars.charAt(Math.floor(Math.random() * chars.length))
		}

		setNewPassword(password)
	}

	function hidePassword(newPasswordLength) {
		let password = ''

		for (let i = 0; i < newPasswordLength; i++) {
			password += '*'
		}

		return password
	}

	function copyPassword(newPassword) {
		navigator.clipboard.writeText(newPassword)
		alert('Pomyślnie skopiowano !')
	}

	return (
		<>
			<div className={styles.container}>
				<Header />
				<main>
					<div>
						<div>
							<label className={styles.label} htmlFor='length'>
								Długość hasła:
							</label>
							<input
								className={styles.input}
								type='number'
								value={passwordLength}
								min={1}
								id='length'
								onChange={e => setPasswordLength(e.target.value)}
							/>
						</div>
						<InputCheckbox
							id='special-characters'
							htmlFor='special-characters'
							checked={includeSpecialCharacters}
							onChange={e => setIncludeSpecialCharacters(e.target.checked)}>
							Znaki specjalne
						</InputCheckbox>
						<InputCheckbox
							id='numbers'
							htmlFor='numbers'
							checked={includeNumbers}
							onChange={e => setIncludeNumbers(e.target.checked)}>
							Liczby
						</InputCheckbox>
						<InputCheckbox
							id='capitals'
							htmlFor='capitals'
							checked={includeUppercase}
							onChange={e => setIncludeUppercase(e.target.checked)}>
							Wielkie litery
						</InputCheckbox>

						<button onClick={() => handleGeneratePassword(passwordLength)} className={styles.button}>
							Generuj hasło
						</button>
					</div>
					{newPassword && (
						<div className={styles.generatedPassword}>
							<p>
								<strong>Twoje hasło:</strong>
							</p>
							<p className={styles.password}>{showPassword ? newPassword : hidePassword(newPassword.length)}</p>
							<div className={styles.passwordOptions}>
								<Button onClick={() => setShowPassword(prevShowPassword => !prevShowPassword)}>
									{showPassword ? 'Ukryj' : 'Pokaż'}
								</Button>
								<Button onClick={() => copyPassword(newPassword)}>Kopiuj</Button>
							</div>
						</div>
					)}
				</main>
			</div>
		</>
	)
}

export default App
