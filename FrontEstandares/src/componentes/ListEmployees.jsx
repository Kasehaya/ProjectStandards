import 'bootstrap/dist/css/bootstrap.min.css'
import {setDelete, setFormEdit} from '../assets/crud/repositorio'
import {Button} from "react-bootstrap";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./LoginPage/AuthContext.jsx";

const ListEmployees = ({setEmployee, employees, setFormNewEmployee, setIsEditing}) => {

    const handleEditButton = (idEmployee, setEmployee, setFormNewEmployee) => {
        setIsEditing(true)
        setFormEdit(idEmployee, setEmployee, setFormNewEmployee).then(r => r)
    }

    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <>
            <div>
                <div>
                    <ul className={"horizontal"}>
                        <li>
                            <a id={"title-m-page"} className={"active text-align-center"}>
                                <div><Button id={"button-logout"} className={"btn-dark"}
                                             onClick={handleLogout}>Logout</Button>
                                    Estandares y metricas de calidad
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={"container"}>
                    <div className={"container"}>
                        <br/>
                        <h1>Empleados</h1>
                        <button type="button" className={"btn btn-info"}
                                onClick={() => setFormNewEmployee(true)}>Agregar
                            Empleado
                        </button>
                    </div>
                    <div>
                        <table className={"table"}>
                            <thead className={"table-dark"}>
                            <tr>
                                <th scope={"col"} style={{display: "none"}}>idEmployee</th>
                                <th scope={"col"}>Documento</th>
                                <th scope={"col"}>Nombre</th>
                                <th scope={"col"}>Apellido</th>
                                <th scope={"col"}>Dirección</th>
                                <th scope={"col"}>País</th>
                                <th scope={"col"}>Telefono</th>
                                <th scope={"col"}>Región</th>
                            </tr>
                            </thead>
                            <tbody>
                            {employees?.map(employee => (
                                <tr className={"separator bg-primary"} key={employee.idEmployee}>
                                    <td style={{display: "none"}}>{employee.idEmployee}</td>
                                    <td>{employee.document}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.country}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.region}</td>
                                    <td>
                                        <div className={"mb-1"}>
                                            <button
                                                onClick={() => handleEditButton(employee.idEmployee, setEmployee, setFormNewEmployee)}
                                                className={"btn btn-primary"}>Editar
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={"mb-1"}>
                                            <button
                                                onClick={() => setDelete(employee.idEmployee, setFormNewEmployee)}
                                                className={"btn btn-danger"}>Borrar
                                            </button>
                                        </div>
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default ListEmployees;
