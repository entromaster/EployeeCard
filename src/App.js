import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Suman Saurav",
      role: "CEO",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Manish",
      role: "COO",
      img: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Hariom Kalra",
      role: "CTO",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Preyansh Khanna",
      role: "Engineering Manager",
      img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Shubhanshu Singh",
      role: "Director of Engineering",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Shivani Sen",
      role: "VP Engineering",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return(
            <Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.img}
            />)
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
