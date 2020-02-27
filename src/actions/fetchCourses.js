export const fetchCourses = () => (dispatch) => {
    fetch('https://bittrex.com/api/v1.1/public/getmarketsummaries')
    .then(res => res.json())
    .then(data => {
        if(!data.success){
            console.log('Courses api dont working.')
        }else{
            console.log(data.result)
        }
    })
    .catch(err => console.log(err))
};

