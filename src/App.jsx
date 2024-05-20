import { useState } from 'react'
import styles from './App.module.css'
import { Button } from './components/Button/Button'
import { Header } from './components/Header/Header'
import { InputCheckbox } from './components/InputCheckbox/InputCheckbox'

// const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>/?'
// const numbers = '0123456789'
// const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const chars = 'abcdefghijklmnoqprstuvwxyz'

function App() {
	const [newPassword, setNewPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(10)
	// const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(false)
	// const [includeNumbers, setIncludeNumbers] = useState(false)
	// const [includeCapitals, setIncludeCapitals] = useState(false)

	function handleGeneratePassword(passwordLength) {
		let password = ''

		for (let i = 0; i < passwordLength; i++) {
			password += chars.charAt(Math.floor(Math.random() * chars.length))
		}

		
		setNewPassword(password)
	}

	return (
		<>
			<div className={styles.container}>
				<Header />
				<main>
					<div>
						<div>
							<label className={styles.label} htmlFor='number'>
								Długość hasła:
							</label>
							<input
								className={styles.input}
								type='number'
								value={passwordLength}
								min={1}
								onChange={e => setPasswordLength(e.target.value)}
							/>
						</div>
						<InputCheckbox
							id='special-characters'
							htmlFor='special-characters'
							onChange={e => setIncludeSpecialCharacters(e.target.value)}>
							Znaki specjalne
						</InputCheckbox>
						<InputCheckbox id='numbers' htmlFor='numbers' onChange={e => setIncludeNumbers(e.target.value)}>
							Liczby
						</InputCheckbox>
						<InputCheckbox id='capitals' htmlFor='capitals' onChange={e => setIncludeCapitals(e.target.value)}>
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
							<p className={styles.password}>{newPassword}</p>
							<div className={styles.passwordOptions}>
								<Button>Pokaż</Button>
								<Button>Kopiuj</Button>
							</div>
						</div>
					)}
				</main>
			</div>
		</>
	)
}

export default App
