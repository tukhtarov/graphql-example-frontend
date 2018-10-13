import React, { Component } from "react";
import { Mutation } from "react-apollo";
import "./UserCity.css";
import { UPDATE_USER_CITY, QUERY_USERS_LIST } from "../Constants/GraphQL";

class UserCity extends Component {
  state = {
    value: ""
  };

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    const { userID, userCity } = this.props;
    const { value: city } = this.state;
    if (userCity) {
      return <div className="city-name">{userCity}</div>;
    }
    return (
      <Mutation
        mutation={UPDATE_USER_CITY}
        variables={{ userID, city }}
        update={(cache, data) => {
          const cachedData = cache.readQuery({
            query: QUERY_USERS_LIST
          });
          cachedData.allUsers = cachedData.allUsers.map(user => {
            if (user.id === userID) {
              user.city = data.data.updateUserCity.city;
            }
            return user;
          });
          cache.writeQuery({
            query: QUERY_USERS_LIST,
            data: cachedData
          });
        }}
      >
        {updateUserCity => {
          return (
            <div className="container">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  updateUserCity();
                }}
              >
                <label>
                  City:
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="city-input"
                  />
                </label>
                <input type="submit" value="Submit" className="submit-button" />
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default UserCity;
