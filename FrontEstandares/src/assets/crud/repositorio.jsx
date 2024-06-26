import axios from "axios"

export const login = async (username, password) => {
    if (username === '' || password === '') {
        window.alert("Por favor llene campos de usuario y contraseña")
    } else {
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {username, password}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // console.log(username, password, response.data)
            localStorage.setItem('token', JSON.stringify(response.data));
            window.alert("Bienvenid@!")
            return true;
        } catch (error) {
            alert("Login failed");
            return false;
        }
    }
}

export const getAll = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const tokenObject = JSON.parse(localStorage.getItem('token'));
        //if (!token) {
        //    throw new Error('No se encontró un token de autorización');
        //}
        const token = tokenObject.token;
        console.log("Este es el token --> ", token)
        return await axios.get('http://localhost:8080/api/employees/all', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (e) {
        // console.log(e)
        throw e;
    }
}

export const setCreate = async (employee) => {
    if (employee.target.elements.employee_document.value === '' || employee.target.elements.employee_nombre.value === ''
        || employee.target.elements.employee_apellido.value === '' || employee.target.elements.employee_direccion.value === ''
        || employee.target.elements.employee_pais.value === '' || employee.target.elements.employee_telefono.value === ''
        || employee.target.elements.employee_region.value) {
        window.alert("Son necesarios todos los campos antes de crear un nuevo empleado")
    } else {
        try {
            const confirmed = window.confirm("¿Deseas agregar un nuevo empleado?")
            if (confirmed) {
                const tokenObject = JSON.parse(localStorage.getItem('token'));
                const token = tokenObject.token;
                employee.preventDefault();
                const dataEmployee = {
                    document: employee.target.elements.employee_document.value,
                    firstName: employee.target.elements.employee_nombre.value,
                    lastName: employee.target.elements.employee_apellido.value,
                    address: employee.target.elements.employee_direccion.value,
                    country: employee.target.elements.employee_pais.value,
                    phone: employee.target.elements.employee_telefono.value,
                    region: employee.target.elements.employee_region.value
                }
                const response = await fetch("http://localhost:8080/api/employees/nuevoEmployee",
                    {
                        method: "POST",
                        body: JSON.stringify(dataEmployee),
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            'Authorization': `Bearer ${token}`
                        }
                    })
                if (response.ok) {
                    window.alert("Se creo el nuevo empleado")
                    window.location.reload()
                }
            }
        } catch (e) {
            //console.log(e)
        }
    }
}

export const setDelete = async (idEmployee, setFormNewEmployee) => {
    try {
        const confirmed = window.confirm("¿Estás seguro de que quieres eliminar este empleado?")
        if (confirmed) {
            const tokenObject = JSON.parse(localStorage.getItem('token'));
            const token = tokenObject.token;
            const response = await fetch("http://localhost:8080/api/employees/delete/" + idEmployee, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                window.alert("Se realizo la eliminación del empleado")
                window.location.reload()
            }
        }
    } catch (e) {
        console.log(e)
    }
}

export const setFormEdit = async (idEmployee, setEmployee, setFormNewEmployee) => {
    try {
        const tokenObject = JSON.parse(localStorage.getItem('token'));
        const token = tokenObject.token;
        const response = await axios.get("http://localhost:8080/api/employees/id/" + idEmployee, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        setEmployee(response.data)
        setFormNewEmployee(true)
        return response
    } catch (e) {
        console.log(e)
    }
}

export const setUpdate = async (employee) => {
    if (employee.target.elements.employee_document.value === '' || employee.target.elements.employee_nombre.value === ''
        || employee.target.elements.employee_apellido.value === '' || employee.target.elements.employee_direccion.value === ''
        || employee.target.elements.employee_pais.value === '' || employee.target.elements.employee_telefono.value === ''
        || employee.target.elements.employee_region.value) {
        window.alert("Son necesarios todos los campos antes de crear un nuevo empleado")
    } else {
        try {
            const confirmed = window.confirm("¿Actualizar datos del empleado?")
            if (confirmed) {
                const tokenObject = JSON.parse(localStorage.getItem('token'));
                const token = tokenObject.token;
                employee.preventDefault();
                const dataEmployee = {
                    idEmployee: employee.target.elements.employee_idemployee.value,
                    document: employee.target.elements.employee_document.value,
                    firstName: employee.target.elements.employee_nombre.value,
                    lastName: employee.target.elements.employee_apellido.value,
                    address: employee.target.elements.employee_direccion.value,
                    country: employee.target.elements.employee_pais.value,
                    phone: employee.target.elements.employee_telefono.value,
                    region: employee.target.elements.employee_region.value
                }
                await fetch("http://localhost:8080/api/employees/actualizarEmployee",
                    {
                        method: "POST",
                        body: JSON.stringify(dataEmployee),
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            'Authorization': `Bearer ${token}`
                        }
                    })
                window.alert("Se actualizaron los datos")
                window.location.reload()
            }
        } catch (e) {
            // console.log(e)
        }
    }
}

export const setCreateUser = async (user) => {
    if (user.target.elements.user_document.value === ''
        || user.target.elements.user_username.value === ''
        || user.target.elements.user_password.value === ''
        || user.target.elements.user_nombre.value === ''
        || user.target.elements.user_apellido.value === ''
        || user.target.elements.user_country.value === '') {
        window.alert("No deben quedar campos vacios")
    } else {
        try {
            const confirmed = window.confirm("¿Deseas registrarte como usuario?")
            if (confirmed) {
                user.preventDefault()
                const dataUser = {
                    documentId: user.target.elements.user_document.value,
                    username: user.target.elements.user_username.value,
                    password: user.target.elements.user_password.value,
                    firstName: user.target.elements.user_nombre.value,
                    lastName: user.target.elements.user_apellido.value,
                    country: user.target.elements.user_country.value
                }
                console.log(dataUser)
                const response = await fetch("http://localhost:8080/auth/register", {
                    method: "POST",
                    body: JSON.stringify(dataUser),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                })
                if (response.ok) {
                    window.alert("Se ha creado el usuario!")
                    window.location.reload()
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
}
