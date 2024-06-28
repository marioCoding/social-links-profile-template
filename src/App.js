import Card from './components/Card';
import './App.css';


function App() {
  return (
    <div className= "relative flex flex-col items-center justify-center min-h-screen bg-offblack full-screen">
      <Card title="Jessica Randall" location="London, United Kingdom" description='"Front-end developer and avid reader."' />
      <div className="text-grey text-xs mt-4">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">marioCoding</a>.
      </div>
    </div>
  );
}

export default App;
