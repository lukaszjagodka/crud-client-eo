export const sendUserLogin = (url, data) => (dispatch) =>{
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify({email: data.email, password: data.password})
    })
    .then(res => res.json())
    .then(data => {
        if(!data.success){
            alert('Wrong email or password');
        }
        else{
            localStorage.setItem('jwt', data.accessToken)
        }
    })
    .catch(err => console.log(err))
};