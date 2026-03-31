import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Table({ entity }) {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const load = async () => {
    const res = await API.get('/api/' + entity);
    setData(res.data);
  };

  const add = async () => {
    await API.post('/api/' + entity, { name: value });
    load();
  };

  useEffect(() => {
    load();
  }, [entity]);

  return (
    <div>
      <h2>{entity}</h2>

      <input onChange={e => setValue(e.target.value)} />
      <button onClick={add}>Add</button>

      <ul>
        {data.map(d => (
          <li key={d.id}>{JSON.stringify(d)}</li>
        ))}
      </ul>
    </div>
  );
}