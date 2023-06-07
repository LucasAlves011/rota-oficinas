import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Button, Chip, Dialog, DialogContent, DialogTitle, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Switch, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import style from './Terceira.module.css'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const steps = [
  'Adicione uma lista de produtos.',
  'Atribuia os produtos aos clientes.',
  'Pronto !',
];

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 70,
    },
  },
};

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{ width: '80vw', height: '70vh' }}>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContent>


      </DialogContent>

    </Dialog>
  );
}

export default function Terceira() {

  const [dados, setDados] = useState([{
    "nome": "French Pastries",
    "preco": 3.37,
    "unidades": 9,
    "total": 30.33
  }, {
    "nome": "Pepper - Chipotle, Canned",
    "preco": 17.18,
    "unidades": 2,
    "total": 34.36
  }, {
    "nome": "Pepper - Roasted Red",
    "preco": 28.19,
    "unidades": 7,
    "total": 197.33
  }, {
    "nome": "Beer - Pilsner Urquell",
    "preco": 37.85,
    "unidades": 7,
    "total": 264.95
  }, {
    "nome": "Allspice - Jamaican",
    "preco": 25.7,
    "unidades": 2,
    "total": 51.4
  }, {
    "nome": "Godiva White Chocolate",
    "preco": 31.72,
    "unidades": 7,
    "total": 222.04
  }, {
    "nome": "Broom - Push",
    "preco": 1.01,
    "unidades": 3,
    "total": 3.03
  }])

  const [produto, setProduto] = useState({ nome: "", valor: '', unidades: '' });
  const [total, setTotal] = useState(0)


  const [pessoasProdutos, setPessoasProdutos] = useState([{ nome: 'lucas', produtos: ['camisa', 'calça'], taxa: false }])

  useEffect(() => {
    if (dados.lenght === '0'.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) {
      setTotal(0)
    }
    else {
      setTotal(dados.reduce((acc, cur) => acc + cur.total, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    }
  }, [dados])

  const addRow = () => {
    if (produto.nome !== '' && produto.valor !== '' && produto.unidades !== '') {
      setDados([...dados, { nome: produto.nome, preco: parseFloat(produto.valor), unidades: produto.unidades, total: produto.unidades * parseFloat(produto.valor) }])
      setProduto({ nome: '', valor: '', unidades: '' })
    }
  }

  const deleteRow = (index) => {
    setDados(dados.filter(e => dados.indexOf(e) !== index))
  }


  // FUNÇÕES PARA A SEGUNDA TABELA
  const [pessoaNome, setPessoaNome] = useState('')
  const [pessoaProdutos, setPessoaProdutos] = useState([]);
  const [pessoaTaxa, setPessoaTaxa] = useState(false)

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPessoaProdutos(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const addPessoaProduto = () => {
    if (pessoaNome !== '' && pessoaProdutos.length !== 0) {
      setPessoasProdutos([...pessoasProdutos, { nome: pessoaNome, produtos: pessoaProdutos, taxa: pessoaTaxa }])
      setPessoaNome('')
      setPessoaProdutos([])
      setPessoaTaxa(false)
    }
  }

  const deletePessoaProduto = (index) => {
    setPessoasProdutos(pessoasProdutos.filter(e => pessoasProdutos.indexOf(e) !== index))
  }

  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <h1>Terceiro Desafio</h1>
      <div className={style.passos}>
        <Box >
          <Stepper>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>

      <div className={style.container}>
        <div className={style.formulario} >
          <h2>Adicione Produto</h2>
          <TextField id="outlined-basic" label="Nome" value={produto.nome} variant="outlined" size='small' onChange={(e) => setProduto({ ...produto, nome: e.target.value })} />
          <TextField
            label="Valor"
            id="filled-start-adornment"
            type='number'
            size='small'
            value={produto.valor}
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            variant="outlined"
            onChange={(e) => setProduto({ ...produto, valor: e.target.value })}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }} >
            <InputLabel id="demo-simple-select-disabled-label">Unidades</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={produto.unidades}
              label="Age"
              MenuProps={MenuProps}
              size='small'
              onChange={(e) => setProduto({ ...produto, unidades: e.target.value })}
            >
              {Array.from({ length: 99 }, (_, index) => index + 1).map((valor) => (
                <MenuItem
                  key={valor}
                  value={valor}
                >
                  {valor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={() => addRow()}>
            Adicionar
          </Button>
        </div>

        <TableContainer component={Paper} sx={{ minWidth: 100, maxWidth: 800, maxHeight: '65vh' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Produto</TableCell>
                <TableCell align="right">Preço&nbsp;(R$)</TableCell>
                <TableCell align="right">Quantidade</TableCell>
                <TableCell align="right">Total&nbsp;(R$)</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dados.length > 0 ? dados.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.nome.replace(/^\w/, (letra) => letra.toUpperCase())}</TableCell>
                  <TableCell align="right">{row.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                  <TableCell align="right">{row.unidades}</TableCell>
                  <TableCell align="right">{row.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="delete" onClick={() => deleteRow(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
                :
                <TableRow
                  key='empty'
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" colSpan={4} align='center'>
                    <div id={style.fraseVazio}>Isso aqui me parece um pouco vazio.</div>
                  </TableCell>

                </TableRow>
              }
              <TableRow
                key='total'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Total: </TableCell>
                <TableCell align="right">
                  <strong>
                    {total}
                  </strong>
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </div>


      <TableContainer component={Paper} sx={{ minWidth: 100, maxWidth: '80vw', maxHeight: '65vh', margin: 'auto' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '200px' }}>Pessoa</TableCell>
              <TableCell>Produtos</TableCell>
              <TableCell align='center'>Taxa de Serviço</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pessoasProdutos.length > 0 ? pessoasProdutos.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.nome.replace(/^\w/, (letra) => letra.toUpperCase())}</TableCell>
                <TableCell align="left" >
                  <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                    {row.produtos.map((produto) => (
                      <Chip key={produto} label={produto.replace(/^\w/, (letra) => letra.toUpperCase())} />
                    ))
                    }
                  </div>
                </TableCell>
                <TableCell align="center">
                  {row.taxa ? <Chip label='Sim' color='success' /> : <Chip label='Não' color='error' />}
                </TableCell>
                <TableCell align="rigth">
                  <IconButton aria-label="delete" onClick={() => deletePessoaProduto(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
              :
              <TableRow
                key='empty'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" colSpan={4} align='center'>
                  <div id={style.fraseVazio}>Adicione pessoas e as relacione aos produtos.</div>
                </TableCell>

              </TableRow>
            }

            <TableRow>
              <TableCell component="th" scope="row">  <TextField id="outlined-basic" label="Nome" value={pessoaNome} variant="outlined" size='small' onChange={(e) => setPessoaNome(e.target.value)} />
              </TableCell>

              <TableCell component="th" scope="row">
                <FormControl>
                  <InputLabel id="demo-simple-select-disabled-label-2">Produtos</InputLabel>
                  <Select
                    sx={{ width: '40vw' }}
                    labelId="demo-multiple-chip-label-2"
                    id="demo-multiple-chip-2"
                    multiple
                    size='small'
                    value={pessoaProdutos}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip label={value} key={Math.random() * (500) + 1} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

              </TableCell>
              <TableCell align="center">
                <Switch value={pessoaTaxa} onChange={() => setPessoaTaxa(!pessoaTaxa)} />
              </TableCell>

              <TableCell align="center">
                <IconButton onClick={() => addPessoaProduto()}>
                  <AddCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="success" sx={{ textAlign: 'center' }} onClick={() => setOpen(true)}>
        Success
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

    </>
  );
}