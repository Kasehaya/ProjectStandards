import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form} from "react-bootstrap";
import {setCreateUser} from "../../assets/crud/repositorio.jsx";


const RegisterModal = ({isOpen, onRequestClose}) => {

    return (

        <Modal show={isOpen} onHide={onRequestClose} backdrop={"static"} keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Registro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id={"form-register"} onSubmit={setCreateUser}>
                    <Form.Group>
                        <Form.Label>Documento de identidad</Form.Label>
                        <Form.Control type={"number"} id={"user_document"} name={"user_document"}
                                      placeholder={"Ingrese el documento"} className={"input_register"}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>(Correo) Nombre de usuario</Form.Label>
                        <Form.Control type={"email"} id={"user_username"} name={"user_username"}
                                      placeholder={"Ingrese el correo"} className={"input_register"}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type={"password"} id={"user_password"} name={"user_password"}
                                      placeholder={"Ingrese la contraseña"} className={"input_register"}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type={"text"} id={"user_nombre"} name={"user_nombre"}
                                      placeholder={"Ingrese el nombre"} className={"input_register"}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type={"text"} id={"user_apellido"} name={"user_apellido"}
                                      placeholder={"Ingrese el apellido"} className={"input_register"}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>País</Form.Label>
                        <Form.Control type={"text"} id={"user_country"} name={"user_country"}
                                      placeholder={"Ingrese el país"} className={"input_register"}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button id={"close-register"} variant="secondary" onClick={onRequestClose}>Cerrar</Button>
                <Button id={"button-m-register"} type={"submit"} className={"btn btn-primary"}
                        form={"form-register"}>Registrar</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default RegisterModal;
