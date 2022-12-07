const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(express.static('public'));


app.set('view engine', 'ejs');



app.get('/cadastroCategorias', (req, res)=>{
    res.render('categoria/index');
});


app.get('/cadastroroupa', (req, res)=>{
    res.render('Roupa/index');
});


app.get('/listagemCategorias', (req, res)=>{
    
    const urlListagemCategoria = 'http://localhost:3000/listarCategoria';

 
    axios.get(urlListagemCategoria)
        .then(
            (response)=>{
              
                let categorias = response.data;
                res.render('categoria/listagemCategoria', {categorias});

        }); 
    });





app.get('/listagemroupa', (req, res)=>{
    
    const urlListagemroupa = 'http://localhost:3000/listarroupa';

 
    axios.get(urlListagemroupa)
        .then(
            (response)=>{
              
                res.render('instrumento/listagemInstrumento', {roupa});

        }); 
    });



    app.get('/formEdicaoCategorias/:id', (req, res)=>{
        
        let {id} = req.params;
       
        const urlListagemCategoria = `http://localhost:3000/listarCategoria/${id}`;
        


        axios.get(urlListagemCategoria)
        .then(
            (response)=>{

                let categoria = response.data;
                res.render('categoria/editarCategoria', {categoria});

            }
        )
    });




app.get('/formEdicaoroupa/:id', (req, res)=>{
        
    let {id} = req.params;
   
    const urlListagemroupa = `http://localhost:3000/listarroupa/${id}`;
    


    axios.get(urlListagemroupa)
    .then(
        (response)=>{

            let roupa = response.data;
            res.render('roupa/selecionarroupa', {roupa});

        }
    )
});





    app.post('/alterarCategoria', (req, res)=>{

        const urlAlterarCategoria = 'http://localhost:3000/alterarCategoria';
        console.log(req.body);

        axios.put(urlAlterarCategoria, req.body)
        .then(
            res.send('ALTERADO!')
        )

    });

 




    app.post('/alterarRoupa', (req, res)=>{

        const urlAlterarRoupa = 'http://localhost:3000/alterarRoupa';
        console.log(req.body);

        axios.put(urlAlterarRoupa, req.body)
        .then(
            res.send('ALTERADO!')
        )

    });


app.listen(3001, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});






app.get('/excluirCategoria/:id',(req, res)=>{
    let {id} = req.params;
    const urlDeletarCategoria = `http://localhost:3000/excluirCategoria/${id}`;
    axios.delete(urlDeletarCategoria, req.body)
    .then(
        res.send('DELETADO')
)});











app.get('/excluirroupa/:id',(req, res)=>{
    let {id} = req.params;
    const urlDeletarroupa = `http://localhost:3000/excluirroupa/${id}`;
    axios.delete(urlDeletarroupa, req.body)
    .then(
        res.send('DELETADO')
)});




