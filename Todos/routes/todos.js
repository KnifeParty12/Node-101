const route = require('express').Router();

let todos = [
    {task: 'Waking Up', done :'yes'},
    {task: 'Brushing', done :'no'},
    {task: 'Exercise', done :'no'},
    {task: 'Bathing', done :'yes'}
];
/*-----GET Request------*/
route.get('/:id',(req,res) =>
{ if(req.params.id <= todos.length)
    res.send(todos[req.params.id-1]);
    else{
    res.send('<h2 align="center">404 Page Not Found</h2>');
}
});

route.get('/',(req,res) => res.send(todos));

/*----Post Request----*/
route.post('/', (req,res) =>{
   todos.push({
      task: req.body.task,
      done: req.body.done
   });
   res.send(todos)
});

/*---Delete Request----*/
route.delete('/:id',(req,res) => {
    let omit = todos.splice(req.params.id-1,1);
    res.send(todos);
});

/*----Patch Request----*/
route.patch('/:id',(req,res)=>{
    todos.splice(req.params.id-1,1,({name:req.query.task, done: req.query.done}))
    res.send(todos);
});

/*---404 handler----*/
route.use((req,res)=> res.send('<h2 align="center">404 Page Not Found</h2>'));

module.exports = route;
