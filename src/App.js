import './App.css';
import './General.css';
import './HowWeFeelin.css';

function App() {
  return (
    <main>
      <div className="moodBox">
        <div className="feelText">HOW WE FEELING?</div>
      <div>
        <input id="userMood" type="text" placeholder="Mood" />
      </div>
      </div>
    </main>
  );
}

export default App;
