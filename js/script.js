var btn1 = document.getElementById("btn-1"); 
var input = document.getElementById("input");
var tasks = document.getElementById("tasks");
var clear = document.getElementById("clear");
var id = 1;


btn1.addEventListener("click",function(){
  
  input.innerHTML = '<br><input type="text" id="tarefa"/> <button type="submit" id="btn-2">Confirmar</button><button type="submit" id="btn-2-cancelar">Cancelar</button>'
  
  var confirm = document.getElementById("btn-2");
  var cancel =  document.getElementById("btn-2-cancelar");
  var text = document.getElementById("tarefa"); 
  
 confirm.addEventListener("click",function(){
   
    
   
    var node = document.createElement("p");
    var textnode = document.createTextNode(id+'° Tarefa : '+text.value);
    node.appendChild(textnode);
    id++;
    text.value = '' 
   
    var node2 = document.createElement("BUTTON");
    var buttonnode = document.createTextNode('Concluir tarefa');
    node2.appendChild(buttonnode);
    // node2 .id = 'id'+id;
   
    document.getElementById("tasks").appendChild(node)
    document.getElementById("tasks").appendChild(node2)
   
       node2.addEventListener('click',function(){
     
              node.style.textDecoration ='line-through'
              node2.style.display = 'none'
     
              });
   
  clear.addEventListener("click",function(){
  
    while(tasks.firstChild){
    tasks.removeChild(tasks.firstChild);
  }
    
    id = 1;
  
    });
 
 }); 

 cancel.addEventListener("click",function(){
  
    input.style.display = 'none';
   
    btn1.addEventListener("click",function(){
   
    input.style.display = 'block';
   
 });
  
});
  
});


