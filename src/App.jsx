import styles from './App.module.css'
import { Button } from './components/Button/Button'
import { Header } from './components/Header/Header'
import { InputCheckbox } from './components/InputCheckbox/InputCheckbox'

function App() {
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
							<input className={styles.input} type='number' min={0} />
						</div>
						<InputCheckbox id='special-characters' htmlFor='special-characters'>
							Znaki specjalne
						</InputCheckbox>
						<InputCheckbox id='numbers' htmlFor='numbers'>
							Liczby
						</InputCheckbox>
						<InputCheckbox id='capitals' htmlFor='capitals'>
							Wielkie litery
						</InputCheckbox>

						<button className={styles.button}>Generuj hasło</button>
					</div>
					<div className={styles.generatedPassword}>
						<p>
							<strong>Twoje hasło:</strong>
						</p>
						<p className={styles.password}>**********</p>
					</div>
					<div className={styles.passwordOptions}>
						<Button>Pokaż</Button>
						<Button>Kopiuj</Button>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
