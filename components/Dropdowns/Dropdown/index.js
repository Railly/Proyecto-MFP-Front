import { useRouter } from "next/router";
import { useEffect } from "react";
/**
 * Componente de lista desplegable
 * @param {children} children - Contenido del componente
 * @param {className} className - Clase del componente
 * @param {boolean} open - Estado de la lista desplegable
 * @param {Function} setOpen - Función para actualizar el estado de la lista desplegable
 * @returns {JSX} Dropdown
 */
export default function Dropdown({ children, open, className, setOpen }) {
  /**
   * Router redireccionar a la pagina de inicio de sesion
   * @returns {void}
   */
  const router = useRouter();
  /**
   * Estilo para los items de la lista desplegable
   * @type {{not_style: string, def_style: string, end_style: string}}
   */
  const styles = {
    not_style:
      "flex flex-row items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b",
    def_style:
      "block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b",
    end_style:
      "block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200",
  };
  /**
   * Funcion para cerrar la lista desplegable
   */
  const handleClickOutside = (e) => {
    if (open) {
      if (!e.target.closest(".dropdown")) {
        setOpen(false);
      }
    }
  };

  /**
   * UseEffect para agregar el evento click a la pagina para cerrar el dropdown
   */
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [open]);

  return (
    <div
      id="dropdown"
      className={`fixed right-0 md:right-[18vmax] top-[98px] w-full mt-2 rounded-md shadow-lg md:w-48 ${
        !open && "hidden"
      } ${className}`}
    >
      <div className="flex flex-col items-center px-2 py-2 bg-white rounded-md shadow">
        {children}
        <a className={styles["not_style"]} href="#">
          Notificaciones
          <span className="flex w-3 h-3">
            <span className="relative inline-flex w-3 h-3 bg-purple-500 rounded-full left-2"></span>
          </span>
        </a>
        <a className={styles["def_style"]} href="#">
          Lista de favoritos
        </a>
        <button
          className={styles["end_style"]}
          onClick={() => {
            window.localStorage.removeItem("user");
            router.push("/login");
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}