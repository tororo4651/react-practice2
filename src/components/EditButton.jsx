import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';


const styles = {
  width: 100,
  padding: 10,
  marginBlockStart: 20,
  borderRadius: 8,
  fontSize: '1.2rem',
  cursor: 'pointer'
};


export const EditButton = () => {

  const { isAdminFlag } = useContext(AdminFlagContext);


  return <button style={styles} type="button" disabled={!isAdminFlag}>編集</button>;
};
