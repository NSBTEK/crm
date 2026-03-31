export default function Layout({ children, setEntity }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 200, background: '#ddd' }}>
        <button onClick={() => setEntity('candidates')}>Candidates</button>
        <button onClick={() => setEntity('clients')}>Clients</button>
        <button onClick={() => setEntity('activities')}>Activities</button>
        <button onClick={() => setEntity('access_requests')}>Access</button>
      </div>

      <div style={{ padding: 20 }}>
        {children}
      </div>
    </div>
  );
}