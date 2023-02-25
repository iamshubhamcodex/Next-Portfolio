const { createContext, useState, useEffect } = require("react");

export const PassManagerContext = createContext();

export default function PassManagerStates({ children }) {
  const [login, setLogin] = useState(false);
  const [regis, setRegis] = useState(false);
  const [logged, setLogged] = useState(false);
  const [mob, setMob] = useState(false);

  const setIsMob = () => {
    setMob(window.innerWidth < 720);
  };

  useEffect(
    () => {
      window.addEventListener("resize", () => setIsMob());
      setIsMob();
    }, //eslint-disable-next-line
    []
  );

  return (
    <PassManagerContext.Provider
      value={{ login, setLogin, regis, setRegis, logged, setLogged, mob }}
    >
      {children}
    </PassManagerContext.Provider>
  );
}
