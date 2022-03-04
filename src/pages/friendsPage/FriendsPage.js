import React, { useEffect, useState } from 'react'
import { ApiCalls } from '../../components/api/ApiCalls'
import ListItem from './components/listItem/ListItem'
import Select from './components/select/Select'
import './FriendsPage.css'

const FriendsPage = () => {

  const [users, setUsers] = useState( [] )
  const [selectedUser, setSelectedUser] = useState( null )
  const [lessons, setLessons] = useState( [] )
  const [usersWithLessons, setUsersWithLessons] = useState( [] )

  useEffect( () => {
    getLessons()
  }, [] )

  useEffect( () => {
    if ( lessons.length > 0 ) {
      getUsers()
    }
  }, [lessons] )

  useEffect( () => {
    if ( users.length > 0 ) {
      getUserFriends()
      getUserLessons()
    }
  // eslint-disable-next-line 
  }, [users] )


  const getUsers = () => {
    ApiCalls.getUsers()
      .then( ( res ) => {
        setUsers( res.data )
      } )
      .catch( ( err ) => {
        console.log( err )
      } )
  }

  const getLessons = () => {
    ApiCalls.getLessons()
      .then( ( res ) => {
        setLessons( res.data )
      } )
      .catch( ( err ) => {
        console.log( err )
      } )
  }

  const getUserLessons = () => {
    ApiCalls.getUserLessons()
      .then( ( res ) => {
        let usersAux = [...users]
        // eslint-disable-next-line 
        usersAux.map( u => {
          let userLessons = []
          res.data.forEach( ul => {
            if ( ul.userId === u.id ) {
              userLessons.push( ul.lessonId )
            }
          } )
          u.lessons = userLessons
        } )
        setUsersWithLessons( usersAux )
        console.log( usersAux )
      } )
      .catch( ( err ) => {
        console.log( err )
      } )
  }

  const getUserFriends = () => {
    ApiCalls.getUserFriends()
      .then( ( res ) => {
        let usersAux = [...users]
        usersAux.map( u => {
          let userFriends = []
          res.data.forEach( uf => {
            if ( (uf.firstUserId === u.id) ) {
              if (!userFriends.includes(uf.secondUserId) && uf.secondUserId !== u.id)
                userFriends.push( uf.secondUserId )
            }else if ( (uf.secondUserId === u.id) ) {
              if (!userFriends.includes(uf.firstUserId) && uf.firstUserId !== u.id)
                userFriends.push( uf.firstUserId )
            }
          } )
          u.friends = userFriends
          return { ...u, friends: userFriends }
        } )
        setUsersWithLessons( usersAux )
        console.log( usersAux )
      } )
      .catch( ( err ) => {
        console.log( err )
      } )
  }

  return (
    <div>
      <span className='friendsPage__title'>
        Users
      </span>
      <div className='friendsPage__select'>
        <Select data={users} value={selectedUser} handleChange={( e, v ) => setSelectedUser( v )} placeholder='Select a user' />
      </div>
      {selectedUser &&
        <div className='friendsPage__select'>
          <span className='friendsPage__title' >
            {selectedUser.name + "'s friends"}
          </span>
          <ul className='friendsPage__list'>
            {usersWithLessons.find( uwl => uwl.id === selectedUser.id ).friends.map( u => <ListItem key={selectedUser.name + u} 
            usersWithLessons={usersWithLessons} user={usersWithLessons.find(uw=> uw.id === u)} lessons={lessons}/>
             )}
          </ul>
        </div>
      }
    </div>
  )
}

export default FriendsPage