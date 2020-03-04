import decode from 'jwt-decode';

export const sendUserLogin = (url, data) => (dispatch) =>{
    const preparedData = data.name
        ? {name: data.name, email: data.email, password: data.password}
        : {email: data.email, password: data.password}

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
        console.log(data, 'here')
        if(data.success && data.accessToken){
            localStorage.setItem('jwt', data.accessToken)
            try{
                const {name} = decode(data.accessToken)
                localStorage.setItem('name', name)
            }catch(e){
            }
            window.location.reload();
        }else if(!data.success && data.message === "Invalid email or password!"){
            alert("Wrong email or password. Try again.")
        }else if(data.success && data.message === "Activation message was send on email."){
            alert('Activation message was send on email.')
            window.location.reload();
        }else{
            alert('Login or password is to short.')
        }
    })
    .catch(err => console.log(err))
};