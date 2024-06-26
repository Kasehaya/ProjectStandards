// Form login
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from "react-router-dom"
import {login} from '/src/assets/crud/repositorio.jsx'
import RegisterModal from '../LoginPage/RegisterModal.jsx'

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const success = await login(username, password);
        if (success) {
            navigate('/formEmployee');
            window.location.reload()
        }
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="container">
                <div className={"container titulo-login"}>
                    <br/>
                    <h1 className={"text-light"}>Inicio de sesión</h1>
                    <br/>
                </div>
                <div className={"container"}>
                    <form className={"form-login align-center"} onSubmit={handleSubmit} id={"login_form"}>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com" value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-5">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className={"container mb-5"}>
                            <button id={"button-login"} type={"submit"} form={"login_form"}
                                    className={"btn btn-primary btn-lg"}>Iniciar sesión
                            </button>
                        </div>
                        <div className={"container mb-5"}>
                            <p className={"p-register text-light mb-1"}>¿No tienes una cuenta?
                                <button id={"button-register"} type={"button"} className={"btn btn-primary btn-lg"}
                                        onClick={openModal}>Registrarse</button>
                            </p>
                        </div>
                    </form>
                    <RegisterModal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                    />
                </div>
            </div>
        </>
    );
}

export default LoginPage;
