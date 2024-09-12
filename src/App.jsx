import { useContext } from 'react';
import { AdminFlagContext } from './components/providers/AdminFlagProvider.jsx';
import { Card } from './components/Card';


export const App = () => {

  const { isAdminFlag, setIsAdminFlag } = useContext(AdminFlagContext);

  const handleSetIsAdminFlag = () => {
    setIsAdminFlag(!isAdminFlag);
  };


  return (
    <div>
      <div>
        <div>{isAdminFlag ? <span>管理者です。</span> : '管理者以外です。'}</div>

        <button type="button" onClick={handleSetIsAdminFlag}>切り替え</button>
      </div>

      <Card />
    </div>
  );
};
