import { ECoachingContext } from "@/Context/ECoaching/ECoachingStates";
import styles from "@/CSS/ECoaching/ECoachingAdmin.module.css";
import { useContext, useEffect, useState } from "react";

const Dashboard = () => {
  const { getUsers, deleteUser } = useContext(ECoachingContext);
  const [users, setUsers] = useState([]);

  const getAll = async () => {
    let d = await getUsers();
    setUsers(d);
  };

  // let users = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getAll();
    // eslint-disable-next-line
  }, []);

  function delUser(id) {
    let filteredUser = users.filter((key) => {
      return key._id !== id;
    });
    setUsers(filteredUser);
    deleteUser(id);
  }

  return (
    <div className={styles.dashboard}>
      <table>
        <tbody>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Password</th>
            <th>Delete</th>
          </tr>
          {users.map((key, i) => {
            return (
              <tr key={key.email}>
                <td>{i + 1}.</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.mobile}</td>
                <td>{key.password}</td>
                <td>
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => delUser(key._id)}
                    className="fa-solid fa-trash"
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
