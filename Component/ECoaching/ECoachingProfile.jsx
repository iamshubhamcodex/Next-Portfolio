import styles from "@/CSS/ECoaching/ECoachingProfile.module.css";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user"))[0];
  console.log(user);
  return (
    <div className={styles.profile}>
      {/* <div className="cont"> */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Mobile No.</th>
            <td>{user.mobile}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td>{user.password}</td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}
    </div>
  );
};

export default Profile;
