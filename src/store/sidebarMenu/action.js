const updateLessons = lessons => {
    return{
        type: 'UPDATE_LESSONS',
        payload: lessons
    }
}

export default updateLessons;