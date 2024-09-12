import { createContext, useState } from 'react';


export const AdminFlagContext = createContext({});


export const AdminFlagProvider = (props) => {

  const { children } = props;

  const [isAdminFlag, setIsAdminFlag] = useState(false);


  return (
    <AdminFlagContext.Provider value={{ isAdminFlag, setIsAdminFlag }}>
      {children}
    </AdminFlagContext.Provider>
  );
};
