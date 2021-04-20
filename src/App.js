
import './App.css';
import Card from "./components/Card"
import supervisor from "./images/icon-supervisor.svg"
import teamBuilder from "./images/icon-team-builder.svg"
import karma from "./images/icon-karma.svg"
import calculator from "./images/icon-calculator.svg"


const App = () => {
  return (
    <div className="App">
      <div className="heading">
        <h1> Reliable, efficient delivery<br/>
          <span>Powered by Technology</span>
        </h1>
        <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        
      </div>
      <div className="cards">
        <Card title="Supervisor" text="Monitors activity to identify project roadblocks" img={supervisor} bc="#44D3D2"/>
        <div className="double">
          <Card title="Team builder" text="Scans our talent network to create the optimal team for your project" img={teamBuilder} bc="#EA5454"/>
          <Card title="Karma" text="Regularly evaluates our talent to ensure quality" img={karma} bc="#FCAE4A"/>
        </div>
        <Card title="Calculator" text="Uses data from past projects to provide better delivery estimates" img={calculator} bc="#549EF2" order="order"/>
      </div>
    </div>
  );
}

export default App;
