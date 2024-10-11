import { Input } from "postcss";

export default function CustomPage() {
    return (
        <div className="bg-black h-screen grid place-items-center">
            <div>
                <form className="">
                    <h1 className="text-center">Login</h1>
                    <span className="mb-2">E-mail</span><br></br>
                    <input type="text" className=""></input><br></br>
                    <span className="mb-2">Senha</span><br></br>
                    <input className="" type="password"></input><br></br>
                    <button type="submit" className="mb-2">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
