import './App.css';
import './General.css';
import './HowWeFeelin.css';

function App() {
  return (
    <main>
      <div className="moodBox">
        <div className="feelText">HOW WE FEELING?</div>
        <div id='search-container'>
          <input id="userMood" type="text" placeholder="Mood" />
          <button id='initiate-search'>GO</button>
        </div>
      </div>
    </main>
  );
}

export default App;
