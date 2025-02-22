import './css/project.css'
function project() {
  return (
    <div className="project">
      <h1 className='hp'>Projects</h1>
      <div className='grid'>
      <div class="card">
        <img className="imgp" src="/stopwatch.jpg" alt="Avatar"></img>
        <div class="container">
          <h4><b>STOP WATCH</b></h4>
          <p className='des'>This project is a basic C++ calculator that allows users to perform simple arithmetic operations like addition, subtraction, multiplication, and division. The program works through a text-based interface where users can input two numbers and select the operation they want to perform.</p>
        </div>
      </div>
      <div class="card">
        <img className="imgp" src="/frog.jpg" alt="Avatar"></img>
        <div class="container">
          <h4><b>JUMPY FROG</b></h4>
          <p className='des'>The "Jump Froggy" game is a web-based interactive simulation where a frog jumps across lily pads arranged in a pond. The objective is to help the frog reach the last lily pad in the least number of jumps, using a greedy algorithm to determine the optimal jumping path.</p>
        </div>
      </div>
      <div class="card">
        <img className="imgp" src="/calender.jpg" alt="Avatar"></img>
        <div class="container">
          <h4><b>COMMUNITY CALENDER</b></h4>
          <p className='des'>The Community Calendar is an innovative platform designed to help local communities discover, organize, and share events effortlessly. This web application serves as a central hub for local events, allowing users to browse upcoming activities, submit their own events, and receive notifications to their interests.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default project;