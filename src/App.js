import './App.css';
import Chats from './Chats';
import Header from './Header';
import ChatScreen from "./ChatScreen"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
   <div>
    <Router>
    <Switch>
    <Route exact path="/chat/:person">
        <Header backButton='/chat'/>
        <ChatScreen/>
       
       </Route>
       <Route exact path="/chat">
        <Header backButton='/'/>
        
        <Chats />
       </Route>
       <Route exact path="/">
        <Header  />
        <TinderCards  />
        <SwipeButtons />
        </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
