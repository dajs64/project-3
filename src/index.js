
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";







// if(players) {
//   return <h3>Loading</h3>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     
      <App />
    </Router>
    <App />
  </React.StrictMode>
  
);

export default App;