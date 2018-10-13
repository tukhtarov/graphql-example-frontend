import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import UserCity from "./UserCity";
import "./User.css";
import { QUERY_USER } from "../Constants/GraphQL";

class User extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query query={QUERY_USER} variables={{ userID: match.params.userId }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div>
              <div className="back-arrow-container">
                <Link to="/">
                  <img
                    alt="Go back"
                    src={require("../Images/back-arrow.png")}
                  />
                </Link>
                <span className="back-arrow-text">Back</span>
              </div>
              <div className="user-info-block">
                <img
                  alt="User"
                  src={require("../Images/image.png")}
                  className="icon"
                />
                <div className="name">{data.user.name}</div>
                <div className="age">{`${data.user.age} years`}</div>
                <UserCity
                  userID={match.params.userId}
                  userCity={data.user.city}
                />
                <div className="horizontal-line" />
                {data.user.knowledge.map((item, i) => (
                  <div key={i} className="lang-frame-container">
                    <div className="lang-name">{item.language}</div>
                    <div className="frameworks-list">
                      {item.frameworks.join(" - ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default User;
