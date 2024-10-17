export default function LoginForm({onSubmit}) {
    return (
        <form className="" onSubmit={onSubmit}>
            <h1 className="text-center">Login</h1>
            <span className="mb-2">E-mail</span><br></br>
            <input name="user" type="text" className="text-black" required></input><br></br>
            <span className="mb-2">Senha</span><br></br>
            <input name="pass" className="text-black" type="password" required></input><br></br>
            <button type="submit" className="mb-2">Cadastrar</button>
        </form>
    );

}