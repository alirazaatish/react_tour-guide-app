import React from "react";
import { usePackages } from "../context/PackegesContext";

const Users = () => {

    const { Users } = usePackages();

    console.log("User>>>>>>>>>>>>>>>>>",Users)

    if (!Users || Users.length === 0) {
        return <h2>No users available.</h2>;
    }

    return (
        <>
          <h1 className="text-3xl font-semibold text-center my-6">Users List</h1>
          <p className="text-center text-lg mb-4">
            Below is the list of all registered users, displaying their usernames and email addresses.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">Username</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">Email</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">Password</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((user) => {
                  return (
                    <tr key={user.id} className="border-b">
                      <td className="py-3 px-6 text-gray-800">{user.userName}</td>
                      <td className="py-3 px-6 text-gray-600">{user.userEmail}</td>
                      <td className="py-3 px-6 text-gray-600">{user.userPassword}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      );
};

export default Users;