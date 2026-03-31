import { useState } from 'react';
import Login from './pages/Login';
import Layout from './components/Layout';
import Table from './components/Table';

function App() {
  const [token, setToken] = useState('');
  const [entity, setEntity] = useState('candidates');

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Layout setEntity={setEntity}>
      <Table entity={entity} />
    </Layout>
  );
}

export default App;