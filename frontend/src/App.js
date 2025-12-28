import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Full Stack Docker + Jenkins App</h1>
      <p>This is a responsive frontend.</p>

      <div className="card">
        <h3>Backend API Test</h3>
        <button onClick={async () => {
          const res = await fetch("http://localhost:5000/api");
          const data = await res.json();
          alert(data.message);
        }}>Call Backend</button>
      </div>
    </div>
  );
}

export default App;
