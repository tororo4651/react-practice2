import { EditButton } from './EditButton';


const styles = {
  width: 300,
  height: 200,
  margin: 30,
  backgroundColor: 'tan',
  borderRadius: 8,
  display: 'flex',
  'flex-direction': 'column',
  justifyContent: 'center',
  alignItems: 'center'
};


export const Card = () => {

  return (
    <div style={styles}>
      <div style={{ fontSize: 22 }}>山田 太郎</div>

      <EditButton />
    </div>
  );
};
