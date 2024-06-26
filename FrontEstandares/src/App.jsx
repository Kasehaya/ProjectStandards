import './App.css'
import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import FormEdit from './componentes/FormEdit'
import {getAll} from './assets/crud/repositorio.jsx'
import ListEmployees from './componentes/ListEmployees.jsx'
import LoginPage from './componentes/LoginPage/LoginPage.jsx'
import PrivateRoute from './componentes/LoginPage/PrivateRoute.jsx'
import {AuthProvider} from "./componentes/LoginPage/AuthContext.jsx"

function App() {
    const [formNewEmployee, setFormNewEmployee] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [employee, setEmployee] = useState(null);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAll().then(res => {
                setEmployees(res.data);
            });
        }
    }, []);

    useEffect(() => {
    }, [formNewEmployee, employee, employees]);

    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/formEmployee" element={<PrivateRoute/>}>
                        {formNewEmployee ? (
                            <Route path="" element={<FormEdit employee={employee} formNewEmployee={formNewEmployee}
                                                              isEditing={isEditing}/>}/>
                        ) : (
                            <Route path="" element={<ListEmployees employee={employee} setEmployee={setEmployee}
                                                                   employees={employees}
                                                                   setFormNewEmployee={setFormNewEmployee}
                                                                   setIsEditing={setIsEditing}/>}/>
                        )}
                    </Route>
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
