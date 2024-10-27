// import React, { StrictMode } from 'react';
import React, { Fragment } from 'react';
import { useContext } from 'react';
import { AdminFlagContext } from './components/providers/AdminFlagProvider.jsx';
import { Card } from './components/Card';


export const App = () => {

  const { isAdminFlag, setIsAdminFlag } = useContext(AdminFlagContext);

  const switchIsAdminFlag = () => {
    setIsAdminFlag(!isAdminFlag);
  };


  return (
    <Fragment>
      <div>
        <p>{isAdminFlag ? <span>管理者です。</span> : '管理者以外です。'}</p>

        <button type="button" onClick={switchIsAdminFlag}>切り替え</button>
      </div>

      <Card />
    </Fragment>
  );
};
