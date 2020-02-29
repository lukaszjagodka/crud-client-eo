export const sendUserLogin = (url, data) => (dispatch) =>{
    const preparedData = data.name
        ? {name: data.name, email: data.email, password: data.password}
        : {email: data.emailLogin, password: data.passwordLogin}
        
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(preparedData)
    })
    .then(res => res.json())
    .then(data => {
        if(!data.success){
            alert('Wrong email or password');
        }
        else{
            localStorage.setItem('jwt', data.accessToken)
            window.location.reload();
        }
    })
    .catch(err => console.log(err))
};