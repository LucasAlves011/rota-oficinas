import { Outlet } from "react-router-dom";

import { Link } from 'react-router-dom'
import style from './PaginaBase.module.css'

function PaginaEmBranco() {
   return (
      <>
         <nav className={style.nav}>
            <div> <Link to="/primeira"> Primeira</Link>  </div>
            <div> <Link to="/segunda"> Segunda</Link>   </div>
            <div> <Link to="/terceira"> Terceira</Link>   </div>
         </nav>

         <section className={style.conteudo}>
            <Outlet />
         </section>

         <footer>Desenvolvido por &nbsp;<a href="https://github.com/LucasAlves011" target="blank">Lucas Alves</a>.</footer>

      </>
   );
}

export default PaginaEmBranco;