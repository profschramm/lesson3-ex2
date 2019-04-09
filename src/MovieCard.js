import React, { Component } from "react";

class MovieCard extends Component {
  render() {

    const { movie, allUsers, userList } = this.props;
    //console.log('Props', this.props)
    //console.log('All Users', this.props.allUsers)
    //console.log('Users who like this movie', this.props.userList)
    console.log('All liked Users', userList)


    const likedUsers = this.props.userList[movie.id];
    console.log('Number of Liked Users', likedUsers)

    return (

       <li key={movie.id}> 
         {movie.name}
         <ul>
         {!likedUsers || likedUsers.length === 0 ? 
         (
          <li>None of the current users liked this movie.</li>
         ) : 
         (
          {likedUsers && likedUsers.map( (user) => {
            return (
              <li key={user}>{allUsers[user].name} liked it </li>
            );
          })}
         )}
        </ul>

       </li>);
  }
}

export default MovieCard;

/* Full Solution that I want in there finally but won't compile
{likedUsers && likedUsers.map( (user) => {
              return (
                <li key={user}>{allUsers[user].name} liked it </li>
              );
          })}
*/
/*  temporary solution that works for a single user
<li key={likedUsers[0]}> {allUsers[likedUsers[0]].name} liked it </li>
*/
         