import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';


const styles = {
  width: 100,
  padding: 10,
  marginBlockStart: 20,
  borderRadius: 8,
  fontSize: 18
};


export const EditButton = () => {

  const { isAdminFlag } = useContext(AdminFlagContext);


  return <button type="button" disabled={!isAdminFlag} style={styles}>編集</button>;
};
