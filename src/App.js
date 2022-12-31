import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Suman Saurav",
      role: "CEO",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Manish",
      role: "COO",
      img: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Hariom Kalra",
      role: "CTO",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Preyansh Khanna",
      role: "Engineering Manager",
      img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Shubhanshu Singh",
      role: "Director of Engineering",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Shivani Sen",
      role: "VP Engineering",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center space-x-4 space-y-4">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>"You cannot see the employees"</p>
      )}
    </div>
  );
}

export default App;
