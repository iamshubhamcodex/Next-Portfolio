const { createContext, useState } = require("react");

export const PassManagerContext = createContext();

export default function PassManagerStates({ children }) {
  const [login, setLogin] = useState(false);
  const [regis, setRegis] = useState(false);

  return (
    <PassManagerContext.Provider value={{ login, setLogin, regis, setRegis }}>
      {children}
    </PassManagerContext.Provider>
  );
}
