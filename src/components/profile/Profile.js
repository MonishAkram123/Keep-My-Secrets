import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <h3 className="teal-text darken-4 center">{"Looking for contribution"}</h3>
            <h6 className="teal-text darken-4 center">{ "Under Developement... feel free to contribute"}</h6>
            <p className="center teal-text darken-4">
            { "The profile page is supposed to contain information about user's profile and options to update the fields... such as phone number, name, password etc" }
          </p>
          </form>
        </div>
      </div>
    )

  }
}
export default Profile
