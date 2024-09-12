import { EditButton } from './EditButton';


const styles = {
  width: 300,
  height: 200,
  margin: 20,
  borderRadius: 8,
  display: 'flex',
  'flex-direction': 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'tan',
};


export const Card = () => {

  return (
    <div style={styles}>
      <div style={{ fontSize: 22 }}>山田 太郎</div>

      <EditButton />
    </div>
  );
};
