
    // Generar un número aleatorio entre 0 y 10
    let numberToGuess = Math.floor(Math.random() * 11);  // Número aleatorio entre 0 y 10
    let attempts = 3;  // Número de intentos

    // Función para verificar la adivinanza
    function checkGuess() {
      const guess = parseInt(document.getElementById('guess').value);
      const messageDiv = document.getElementById('message');

      // Si no se ha ingresado un número válido
      if (isNaN(guess) || guess < 0 || guess > 10) {
        messageDiv.textContent = 'Por favor, ingresa un número entre 0 y 10.';
        return;
      }

      // Comprobar si la adivinanza es correcta
      if (guess === numberToGuess) {
        messageDiv.textContent = '¡Felicidades! Adivinaste el número correctamente.';
      } else {
        attempts--;
        if (attempts > 0) {
          messageDiv.textContent = `¡Incorrecto! Te quedan ${attempts} intentos más. Intenta otra vez.`;
        } else {
          messageDiv.textContent = `¡Lo siento! Has agotado tus intentos. El número era ${numberToGuess}.`;
        }
      }
    }