function register() {
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var direction = document.getElementById('direction').value;
    var password = document.getElementById('password').value;

    // Realizar las validaciones necesarias y enviar los datos al servidor para el registro.
    
    if (email !== confirmEmail) {
      alert('Los correos electrónicos no coinciden. Por favor, verifica.');
    } else {
      // Aquí puedes realizar la lógica de registro
      alert('Registro exitoso!');
    }
  }

  function login() {
    // Implementa la lógica para redirigir a la página de inicio de sesión.
    alert('Redirigir a la página de inicio de sesión.');
  }