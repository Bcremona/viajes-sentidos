export const prerender = false;
import mailer from "../../functions/mailer";

export async function POST({request, redirect}){
    try {
        const data = await request.formData(); // Usa request.formData() aquí
        const email = data.get("email");
        const pregunta = data.get("pregunta");

        mailer(email, pregunta);

        console.log("Datos recibidos:", { email, pregunta });
        return redirect("/");
    } catch (error) {
        alert("Error al enviar el correo:", error);
        return redirect("/#contacto");
    }

}