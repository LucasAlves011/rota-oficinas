import { useState } from "react";
import style from './Segunda.module.css';

function Celula(props) {

   const [viva, setViva] = useState(false)

   return (
      <td onClick={() => !setViva(!viva)}>
         <div style={{ width: '100%', height: '100%', backgroundColor: viva ? 'lightgreen' : 'white' }}> &nbsp;</div>
      </td>
   )
}

function Segunda() {

   const [tabuleiro, setTabuleiro] = useState(() => {
      const linhas = 10;
      const colunas = 10;

      // Cria um novo array bidimensional preenchido com 0
      const novaMatriz = Array(linhas)
         .fill(0)
         .map(() => Array(colunas).fill(0));

      return novaMatriz;
   })

   return (
      <>
         <div id={style.containerTable}>

            <table id={style.tabela}>
               <thead>
                  <tr>
                     <th>A</th>
                     <th>B</th>
                     <th>C</th>
                     <th>D</th>
                     <th>E</th>
                     <th>F</th>
                     <th>G</th>
                     <th>H</th>
                     <th>I</th>
                     <th>J</th>

                  </tr>
               </thead>
               <tbody>
                  {tabuleiro.map((linha, indiceLinha) => (
                     <tr key={indiceLinha}>
                        {linha.map((celula, indiceColuna) => (
                           <Celula key={celula} />
                        ))}
                     </tr>
                  ))}

               </tbody>


            </table>
         </div>

      </>

   );
}

export default Segunda;