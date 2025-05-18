// Author: Thinh Nguyen
// Repo: https://github.com/hungtrungthinh/nextjs-file-server
// Project: Simple Nextjs File Server

function randomRequestId() {
  return Array.from({ length: 20 }, () =>
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 36)]
  ).join('');
}

function randomHostId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  return Array.from({ length: 80 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export default function NotFound() {
  const requestId = randomRequestId();
  const hostId = randomHostId();

  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', background: '#fff', minHeight: '100vh', color: '#000', fontSize: 14 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px 0 16px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 18 }}>403 Forbidden</h1>
        <ul style={{ fontSize: 15, marginBottom: 24, listStyle: 'disc inside' }}>
          <li><b>Code:</b> AccessDenied</li>
          <li><b>Message:</b> Access Denied</li>
          <li><b>RequestId:</b> {requestId}</li>
          <li><b>HostId:</b> {hostId}</li>
        </ul>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: '24px 0 12px 0' }}>
          An Error Occurred While Attempting to Retrieve a Custom Error Document
        </h2>
        <ul style={{ fontSize: 15, marginBottom: 24, listStyle: 'disc inside' }}>
          <li><b>Code:</b> AccessDenied</li>
          <li><b>Message:</b> Access Denied</li>
        </ul>
        <hr style={{ border: 0, borderTop: '1px solid #888', margin: '32px 0 0 0' }} />
      </div>
    </div>
  );
} 