import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import "./app.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
     projectID ="cbacc61f-970c-48a7-8485-ea06480930d5"
      userName="jmdcummnityj"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps } /> }
      />
  );
}

export default App;
