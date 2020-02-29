export const fetchCourses = () => (dispatch) => {
    fetch('https://bittrex.com/api/v1.1/public/getmarketsummaries')
    .then(res => res.json())
    .then(data => {
        if(!data.success){
            console.log('Courses api dont working.')
        }else{
            dispatch(coursesFromFetch(data.result))
        }
    })
    .catch(err => console.log(err))
};

export const coursesFromFetch = (value) => ({
    type: 'ADD_COURSES_FROM_FETCH',
    value
})