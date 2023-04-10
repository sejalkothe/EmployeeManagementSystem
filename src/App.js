// import logo from './logo.svg';
import SurveyTable from './Components/surveyTable/surveyTable';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
   
      <Sidebar />
      <Navbar />
      <SurveyTable />
      </div>
   
  );
}

export default App;
