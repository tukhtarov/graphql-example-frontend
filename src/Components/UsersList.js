import React from "react";
import { Query } from "react-apollo";
import UserCard from "./UserCard";
import "./UsersList.css";
import { QUERY_USERS_LIST } from "../Constants/GraphQL";

const UsersList = props => (
  <Query query={QUERY_USERS_LIST}>
    {({ loading, error, data }) => {
      return (
        <div className="background">
          {loading ? <p>Loading...</p> : null}
          {error ? <p>Error :(</p> : null}
          <div className="users-list-container">
            {data && data.allUsers
              ? data.allUsers.map(userData => (
                  <UserCard
                    key={userData.id}
                    userData={userData}
                    props={props}
                  />
                ))
              : null}
          </div>
        </div>
      );
    }}
  </Query>
);

export default UsersList;
