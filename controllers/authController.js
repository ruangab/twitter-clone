import { loginUser } from "@/models/LoginUser";

export async function handleLogin(event, router) {

    event.preventDefault();

    let user = event.target.user.value;
    let pass = event.target.pass.value;

    try {
        const data = await loginUser(user, pass);


        localStorage.setItem("accessToken", data.accessJwt);
        localStorage.setItem("handle", data.handle);
        localStorage.setItem("refreshToken", data.refreshJwt);

        router.push("/")
    } catch (error) {
        console.error(error.message);        
    }

}