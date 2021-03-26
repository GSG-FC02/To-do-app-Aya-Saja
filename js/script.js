const list = document.getElementById("list");
const add = document.getElementById("btn_Add");
const span_num = document.getElementById("num_list");
const clear = document.getElementById("clear");


add.addEventListener("click",function add(event){
    event.preventDefault();
    const input_new = document.getElementById("write_new").value;
    localStorage.setItem(localStorage.length , input_new);
    document.getElementById("write_new").value = null;
    showToDo(localStorage.length - 1);
    
    
});




function create_element(text){
   
    const div1 = document.createElement("div")
    const par = document.createElement("p")
    const text_note = document.createTextNode(text)
    par.appendChild(text_note);

    const div2 = document.createElement("div")
    const btn_1_delete = document.createElement("button")
    const btn_delete = document.createTextNode("delete")
    btn_1_delete.appendChild(btn_delete)


    const btn_2_edit = document.createElement("button")
    const btn_edit = document.createTextNode("edit")
    btn_2_edit.appendChild(btn_edit)
    par.setAttribute("id", "para2")

    div2.appendChild(btn_1_delete)
    div2.appendChild(btn_2_edit)


    div1.setAttribute("id" , "cont_list")

    btn_1_delete.setAttribute("class","btns")
    btn_2_edit.setAttribute("class","btns")

    btn_1_delete.setAttribute("id" ,"btn_delete")
    btn_2_edit.setAttribute("id" ,"btn_edit")
    btn_2_edit.setAttribute("onclick", "edit")
    div1.appendChild(par)
    div1.appendChild(div2)

    list.appendChild(div1)



}

function showToDo(index){
    if(index == 0){ //كل ما اعمل تحديث للصفحة راح يعرض كل العناصر الموجودة  
        for(i = 0; i< localStorage.length; i++){
            create_element(localStorage.getItem(i))
        }
        
    }
    else if (index > 0){ // كل ما اعمل اضافة راح يتم عرضه
        create_element(localStorage.getItem(index))
    }
    else if (index == -1){ // كل ما اعمل clear راح يحذف كل المحتويات 

        document.querySelectorAll('#cont_list').forEach(function(a){
            a.remove()
            }) //حذف المحتوى من الصفحة 
    
    }
    span_num.textContent = localStorage.length ; // لحساب كم عنصر موجود في localStorage 
}

clear.addEventListener("click" , function clean(event){
    event.preventDefault();
    localStorage.clear();
    showToDo(-1);

})



    function edit() {
       var para1 = document.getElementById("para2");
        var para2 = document.createElement("p");
        parar2.innerHTML = "replaced text";
        para1.parentNode.replaceChild(para2, para1);

    

}
   


window.onload = showToDo(0); // يتم تحديث الصفحة يعرض كل محتويات الستورج  

