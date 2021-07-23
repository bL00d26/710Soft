import axios from "axios";
import { toast } from "react-toastify";
import { ChangeRecoverPasswordDto } from "../../presentation/components/recover-password/dto/change-recover-password.dto";
import { usersURL } from "../../application/store/user/user.types";
export const changePassword = async (
  changeRecoverPasswordDto: ChangeRecoverPasswordDto
) => {
  try {
    const res = await axios.put(
      usersURL.concat("password/recover"),
      changeRecoverPasswordDto
    );
    if (res.data.success) {
      toast.success("Contraseña cambiada con éxito");
      window.location.assign("https://localhost:3000");
    }
  } catch (error) {
    toast.error("Error al cargar las lecturas");
  }
};
