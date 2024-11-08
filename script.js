

  lucide.createIcons();

function togglePassword(){
    const password = document.getElementById('password')
    const eyeIcon = document.querySelector(".eye-icon")

    if(password.type === 'password'){
        password.type = 'text'
        eyeIcon.setAttribute('data.lucide','eye-off')
    } else {
        password.type ='password'
        eyeIcon.setAttribute('data.lucide','eye')
    }
    lucide.createIcons()
}
