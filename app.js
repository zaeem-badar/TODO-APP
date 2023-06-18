var todo_item = document.getElementById('todo-item')
var list = document.getElementById('list')    


window.addTodo = function(){
  var li= document.createElement('li')
  var liText = document.createTextNode(todo_item.value)
  li.appendChild(liText)

var delBtn = document.createElement("button")
var delText = document.createTextNode('DELETE')
delBtn.setAttribute("class", "btn")
delBtn.setAttribute('onclick','delBtn(this)')
delBtn.appendChild(delText)

var editBtn = document.createElement('button')
var editText = document.createTextNode('EDIT')
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editBtn(this)")
li.appendChild(delBtn)
li.appendChild(editBtn)
list.appendChild(li)

todo_item.value =""
}

window.delBtn = function(a){
a.parentNode.remove()
}

window.editBtn = function(a){
  var val = prompt("ENTER UPDATED VALUE")
  a.parentNode.firstChild.nodeValue =val
}

window.delAll = function(){
  list.innerHTML=""
}