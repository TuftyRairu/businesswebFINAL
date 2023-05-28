function signUp(){
    let username = document.querySelector('#setuser');
    let password = document.querySelector('#setpass');
    let email = document.querySelector('#setemail');

    if(username.value == '' || password.value == '' || email.value == ''){
        alert('Please enter a value');
    } else {
        let user = {
            username: username.value,
            password: password.value,
            email: email.value
        }

        let json = JSON.stringify(user);

        localStorage.setItem('user', json);
        console.log('User Added');
        alert('User Registered Successfully');
        username.value = '';
        password.value = '';
        email.value = '';
    }
}

function logIn(){
    let username = document.querySelector('#getuser').value;
    let password = document.querySelector('#getpass').value;

    let user = localStorage.getItem('user');
    let key = JSON.parse(user);

    if(username == '' && password == ''){
        alert('Missing Input!');
    } else if((username == key.username || username == key['email']) && password == key.password){
        alert('Successfully Logged in!');
        window.location.href = 'member.html';
        return false;
    } else {
        alert('User Not Found!');
    }
}