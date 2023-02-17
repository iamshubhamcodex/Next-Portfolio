import styles from "@/CSS/ECoaching/ECoachingAdmin.module.css";

const Dashboard = () => {
  let users = JSON.parse(localStorage.getItem("user"));
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
          </tr>
          {users.map((key, i) => {
            return (
              <tr key={key.email}>
                <td>{i + 1}.</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.mobile}</td>
                <td>{key.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
