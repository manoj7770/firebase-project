import logo from './logo.svg';
import './App.css';
import { set, ref, onValue } from 'firebase/database';
import { database } from "./firebase";

function App() {

  function writeUserData(userId, name, email, imageUrl) {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
    }
  
    writeUserData('1', 'Manoj', 'manojrai7770@gmail.com', 'https://instagram.com')
    writeUserData('2', 'Anjali', 'anjali2000@gmail.com', 'https://facebook.com')
  
    function writeChatData(chatId, sender, message, receiver) {
    set(ref(database, 'chat/' + chatId), {
      sender,
      receiver,
      message
    });
    }
  
    writeChatData('Manoj', 'Manoj', 'Hello, how are you?', 'Anjali');
    writeChatData('Anjali', 'Anjali', 'I m good! What about u?', 'Anjali');
  
    const userRef = ref(database);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
