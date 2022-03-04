import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './ListItem.css'

const ListItem = ( { user, usersWithLessons, lessons } ) => {

    const getUserLessons = () => {
        let userLessons = usersWithLessons.find( u => u.id === user.id )
        console.log(userLessons)
        return userLessons.lessons.map( l => 
            <li className='listItem__userLesson'>
                {lessons.find(lesson=> lesson.id === l)?.description}
            </li>
        )
    }

    return (
        <li>
            <Card sx={{ width: '35%', marginTop: '20px' }}>
                <CardContent>
                    <Grid container spacing={5}> 
                        <Grid item xs className='listItem__textAlignCenter' >
                            <div className='listItem__textAlignCenter' >
                                <span className='listItem__userName'>
                                    {user?.name}
                                </span>
                            </div>
                            <img alt='user' src={user.photo} className='listItem__userLogo' />
                        </Grid>
                        <Grid item xs >
                            <div >
                                <span className='listItem__title' >
                                    Lessons
                                </span>
                            </div>
                            <ul className='friendsPage__list'>
                                {getUserLessons()}
                            </ul>
                        </Grid>


                    </Grid>

                </CardContent>
            </Card>
        </li>
    )
}

export default ListItem