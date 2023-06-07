import { Chip } from '@mui/material';
import style from './Teste.module.css'

function Teste() {

   const dados =  ['calça','carro']

   return (



      <div id={style}>
         <header>header</header>
         <nav>nav</nav>
         <main>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>

            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut cumque rem officiis, inventore nostrum blanditiis quidem atque ad nemo nam. Voluptas eos tempora porro odit maxime magni quae error?</div>


            {dados.map(r => (
               <Chip label={r} key={r}/>
            )) }
         </main>
         <footer>
            footer
         </footer>
      </div>


    );
}

export default Teste;