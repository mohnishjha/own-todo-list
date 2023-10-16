function submit(){
    document.getElementById("error").innerHTML = "";  //resets the error message


    let input = document.getElementById("inputid").value  //task in input

    if(input == ""){
        document.getElementById("error").innerHTML = "Error: Cannot Submit Empty Task! <br>Respect Taskify <br>Please"
    }
    else{
        let list = document.getElementById("listid");
        let li = document.createElement("li");
        li.textContent = input;
        
        //checkbox
        let checkBox = document.createElement("input");
        checkBox.className = "checkBox"
        checkBox.type = "checkbox"
        li.appendChild(checkBox)

        //delete button
        let delbtn = document.createElement("span");
        delbtn.textContent = "X";
        delbtn.className = "delbtn";
        delbtn.id = "delbtnid"
        delbtn.addEventListener("click", e =>{
            list.removeChild(li);
        })
        li.appendChild(delbtn);


        //making list
        let pos = list.firstElementChild;
        if(pos == null){
            list.appendChild(li);
        }
        else{
            list.insertBefore(li, pos);
        }

    }
    document.getElementById("inputid").value = "";
}
