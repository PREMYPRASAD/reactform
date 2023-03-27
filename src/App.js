

// import Header from './components/Header';
// import Login from './components/Login';
import { Component } from 'react';
import TodoApp from './components/TodoApp/TodoApp';


// function App() {
//     return (
//         //jsx (javascript XML)
//         < div className="App" >
// <Header></Header>
//             <h1 >Welcome to react </h1>
//             <Login></Login>
//         </div >)
// }
export class App extends Component {
    render() {
        return<div><TodoApp></TodoApp></div>
    }
}
export default App; 