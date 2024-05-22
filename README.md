[!banner with app's title and logo](./src/assets/Password_Generator_banner.png)


**Live project:** [Password Generator](https://www.example.com)

## 📜 Description

Password Generator is a web application built in React that allows users to generate secure passwords. Users can customize the generated password by selecting various options such as password length, inclusion of special characters, numbers, and uppercase letters. The application also provides the functionality to copy the generated password to the clipboard and to hide/show the password.

## 🔨 Features

- **Password Generation**: Creates a password based on selected options.
- **Customization Options**:
  - Password length (min. 1 character)
  - Inclusion of special characters
  - Inclusion of numbers
  - Inclusion of uppercase letters
- **Copy Password**: Copy the generated password to the clipboard with a single click.
- **Hide/Show Password**: Option to hide the password, displaying it as a series of '*' characters.

## ⚙️ Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/password-generator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd password-generator
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm start
    ```

## 👨‍💻 Usage

1. Select the desired password length.
2. Check the options you want to include in the password (special characters, numbers, uppercase letters).
3. Click the **Generate Password** button to create a new password.
4. Copy the password to the clipboard by clicking the **Copy** button.
5. Hide or show the password by clicking the **Hide/Show** button.

## 💡 Problems and Solutions

1. **Generating a Random Password**:
    - **Problem**: How to create a random password according to the selected options.
    - **Solution**: The `handleGeneratePassword` function creates a string based on the selected options (special characters, numbers, uppercase letters). It randomly selects characters from the available character sets.

    ```javascript
    function handleGeneratePassword(passwordLength) {
      let password = '';
      let chars = lowercase;

      if (includeSpecialCharacters) chars += specialCharacters;
      if (includeNumbers) chars += numbers;
      if (includeUppercase) chars += uppercase;

      for (let i = 0; i < passwordLength; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      setNewPassword(password);
    }
    ```

2. **Hiding the Password**:
    - **Problem**: How to hide the generated password, displaying it as a series of '*' characters.
    - **Solution**: The `hidePassword` function converts the password to a series of '*' characters. The `showPassword` state controls whether the password is hidden or shown.

    ```javascript
    function hidePassword(newPasswordLength) {
      let password = '';

      for (let i = 0; i < newPasswordLength; i++) {
        password += '*';
      }

      return password;
    }
    ```

3. **Copying the Password to Clipboard**:
    - **Problem**: How to allow the user to copy the generated password to the clipboard.
    - **Solution**: The Clipboard API is used to copy the password when the "Copy" button is clicked.

    ```javascript
    function copyPassword(newPassword) {
      navigator.clipboard.writeText(newPassword);
      alert('Password copied successfully!');
    }
    ```

4. **Managing Application State**:
    - **Problem**: How to store and manage various options and the generated password.
    - **Solution**: The React `useState` hook is used to manage the application's state, including the options for generating the password and the password itself.

    ```javascript
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordLength, setPasswordLength] = useState(10);
    const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    ```




