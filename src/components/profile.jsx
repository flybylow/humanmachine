import { Link } from 'react-router-dom';

function Profile() {
    return (
      <div>
        <h1>Player Profile</h1>
        <p>This is the profile page</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
  
  export default Profile