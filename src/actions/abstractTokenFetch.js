const token = localStorage.getItem('jwt');

export const abstractTokenFetch = (url, method, data) =>{
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(reData => {
        console.log(reData, 'data')
        if(reData.success === false && reData.message === "Wrong password."){
            alert('Wrong password.')
        }
        if(reData.success === true && reData.message === "Account was deleted."){
            alert('Account was deleted.')
            localStorage.clear();
            window.location.reload();
        }
        if(reData.success === true && reData.message === "New password confirmed."){
            alert('New password confirmed.')
            window.location.reload();
        }
    })
    .catch((err) => {
        console.log(err)
    })
};