import {setCreate, setUpdate} from "../assets/crud/repositorio";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap";

const FormEdit = ({employee, formNewEmployee, isEditing}) => {

    function rellenarValor(property) {
        return employee !== null ? employee[property] : ""
    }

    const handleBeforePage = () => {
        window.location.reload()
    };

    return (
        <>
            <div>
                <div>
                    <ul className={"horizontal"}>
                        <li>
                            <a className={"active text-align-center"}>
                                <div><Button id={"button-logout"} className={"btn-dark"}
                                             onClick={handleBeforePage}>Volver</Button>
                                    Estandares y metricas de calidad
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={"container"}>
                    <div className={"container"}>
                        <br/>
                        <h1>{isEditing ? 'Actualizar Empleado' : 'Crear Empleado'}</h1>
                        <br/>
                    </div>
                    <div className={"container"}>
                        <form onSubmit={isEditing ? setUpdate : setCreate} id="employee_form">

                            <label htmlFor="employee_idemployee" className="form-label" hidden>idemployee</label>
                            <input type={"text"} id={"employee_idemployee"} name={"employee_idemployee"}
                                   className={"input_employee form-control form-control-lg"}
                                   defaultValue={rellenarValor("idEmployee")}
                                   placeholder="Id Empleado" aria-label=".form-control-lg example" hidden/>

                            <label htmlFor="idemployee" className="form-label">Documento</label>
                            <input type={"text"} id={"employee_document"} name={"employee_document"}
                                   className={"input_employee form-control form-control-lg"}
                                   defaultValue={rellenarValor("document")}
                                   placeholder="Documento identidad" aria-label=".form-control-lg example"/>
                            <br/>

                            <label htmlFor="idemployee" className="form-label">Nombre</label>
                            <input type={"text"} id={"employee_nombre"} name={"employee_nombre"}
                                   className={"input_employee form-control form-control-lg"}
                                   defaultValue={rellenarValor("firstName")}
                                   placeholder="Nombre Empleado" aria-label=".form-control-lg example"/>
                            <br/>

                            <label htmlFor="idemployee" className="form-label">Apellido</label>
                            <input type={"text"} id={"employee_apellido"} name={"employee_apellido"}
                                   className={"input_employee form-control form-control-lg"}
                                   defaultValue={rellenarValor("lastName")}
                                   placeholder="Apellido" aria-label=".form-control-lg example"/>
                            <br/>

                            <label htmlFor="idemployee" className="form-label">Dirección</label>
                            <input type="text" id="employee_direccion" name="employee_direccion"
                                   className={"form-control form-control-lg input_employee"}
                                   defaultValue={rellenarValor("address")}
                                   placeholder="Dirección" aria-label=".form-control-lg example"/>
                            <br/>

                            <label htmlFor="idemployee" className="form-label">País</label>
                            <input type="text" id="employee_pais" name="employee_pais"
                                   className={"form-control form-control-lg input_employee"}
                                   defaultValue={rellenarValor("country")}
                                   placeholder="País" aria-label=".form-control-lg example"/>
                            <br/>

                            <label htmlFor="idemployee" className="form-label">Telefono</label>
                            <input type="text" id="employee_telefono" name="employee_telefono"
                                   className={"form-control form-control-lg input_employee"}
                                   defaultValue={rellenarValor("phone")}
                                   placeholder="Telefono" aria-label=".form-control-lg example"/>
                            <br/>

                            <label htmlFor="idemployee" className="form-label">Región</label>
                            <input type="text" id="employee_region" name="employee_region"
                                   className={"form-control form-control-lg input_employee"}
                                   defaultValue={rellenarValor("region")}
                                   placeholder="Región" aria-label=".form-control-lg example"/>
                            <br/>

                        </form>
                    </div>
                    <div className={"container"}>
                        <button id={"form-button"} type={"submit"} form={"employee_form"}
                                className={"btn btn-info"}>
                            {isEditing ? 'Actualizar Empleado' : 'Agregar Empleado'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default FormEdit;
