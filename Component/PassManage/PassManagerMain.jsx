import styles from "@/CSS/PassManager/PassManagerMain.module.css";
import { useContext, useEffect, useState } from "react";
import { PassManagerContext } from "@/Context/PassManager/PassManagerStates";
import PassManageAdd from "./PassManageAdd";
import PassManageDetail from "./PassManageDetail";

export default function PassManagerMain() {
  let {
    userDetails,
    smMob,
    selected,
    updateUser,
    deleteCredential,
    cred,
    setCred,
  } = useContext(PassManagerContext);
  const [showAdd, setShowAdd] = useState(false);
  const [details, setDetails] = useState(false);
  const [idArr, setIdArr] = useState();
  const [updated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const updatingUser = async (body) => {
    if (await updateUser(body)) {
      setShowAdd(false);
      setDetails(false);
      setUpdated(true);
    }
  };
  const deleteCred = async (id) => {
    setDeleting(true);
    if (await deleteCredential(id)) {
      setDeleted(true);
      setDeleting(false);
    }
  };
  const handleItem = (val) => {
    if (!deleting) {
      setCred(val);
      setDetails(true);
    }
  };

  useEffect(() => {
    setIdArr(userDetails[selected.toLowerCase()]);
    if (updated) setUpdated(false);
    if (deleted) setDeleted(false);
  }, [selected, updated, deleted]);
  return (
    <>
      <div className={styles.main}>
        <PassManageAdd
          showAdd={showAdd}
          selected={selected}
          setShowAdd={setShowAdd}
          updateUser={updatingUser}
        />
        <PassManageDetail
          details={details}
          selected={selected}
          cred={cred}
          setDetails={setDetails}
          updateUser={updatingUser}
        />
        <header>
          <div className={styles.adds}>
            <div className={styles.add} onClick={() => setShowAdd(!showAdd)}>
              <svg viewBox="0 0 24 24" stroke="10" fill="currentcolor">
                <path d="M13.2 2H11v9H2v2.2h9V22h2.2v-8.8H22V11h-8.8V2Z"></path>
              </svg>
              <p>Add New</p>
            </div>
          </div>
          <div className={styles.profiles}>
            <a
              href=""
              className={styles.profile}
              onClick={() => {
                window.localStorage.removeItem("userPass");
              }}
            >
              LogOut
            </a>
          </div>
        </header>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.name}>Item Name</div>
            {!smMob && <div className={styles.category}>Category</div>}
            <div className={styles.lastu}>Delete</div>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.items}>
            {idArr &&
              idArr.map((k, i) => {
                if (k) {
                  return (
                    <div className={styles.item} data-id={k._id} key={k._id}>
                      <div
                        className={styles.item_name}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleItem(k);
                        }}
                      >
                        <div className={styles.logo}>{k.name.slice(0, 2)}</div>
                        <div className={styles.details}>
                          <div className={styles.name}>{k.name}</div>
                          <div className={styles.email}>
                            {k.email || k.date || k.idnumber}
                          </div>
                        </div>
                      </div>
                      {!smMob && (
                        <div className={styles.category}>
                          {k.category === "" ? "No Category" : k.category}
                        </div>
                      )}
                      <div
                        style={{ zIndex: "3" }}
                        className={styles.lastu}
                        onClick={() => deleteCred(k._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="ui-components-mncpj4"
                        >
                          <path d="M7 2v2h10V2H7ZM3 6h18v2h-2v13h-2V8H7v11h7l1.2 2H5V8H3V6Z"></path>
                          <path d="M9 11h2v4l-2 1.2V11Zm4 .017h2V15l-2 1.2v-5.183Z"></path>
                        </svg>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
}
