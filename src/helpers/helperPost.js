// export const sendUserLogin = (data) => {
//     console.log(data)
//     console.log(data.email)
//     console.log(data.password)
//     fetch('http://localhost:3001/users/login', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         mode: 'cors',
//         credentials: 'same-origin',
//         body: JSON.stringify({email: data.email, password: data.password})
//     })
//     .then(res => res.json())
//     .then(data => console.log(data, 'lel'))
//     .catch(err => console.log(err))
// };