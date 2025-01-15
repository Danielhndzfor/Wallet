import React from 'react'

function Login() {
    return (
        <div className="container-login">
            <div className="wrap-login">
                <div className="login-form">
                    <span>Iniciar Sesión</span>
                    <form action="login" method="post">
                        <div className="wrap-input">
                            <label>Correo Electrónico:</label>
                            <input type="email" name="email" placeholder="Correo Electrónico" />
                        </div>
                        <div className="wrap-input">
                            <label>Contraseña:</label>
                            <input type="password" name="password" placeholder="Contraseña" />
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Iniciar Sesión</button>
                            <a href="/Register">¿No tienes cuenta?, Regístrate</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login