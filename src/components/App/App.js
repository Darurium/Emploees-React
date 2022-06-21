import AppFilter from "../AppFilter/AppFilter";
import AppInfo from "../AppInfo/AppInfo";
import EmployeesList from "../EmploeesList/EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";
import SearchPanel from "../SearchPanel/SearchPanel";

import "./app.css";


function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    )
};

export default App;