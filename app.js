let employee = ["Talha","Fardeen","Agha","Hammad","Anus","Abdul ghaffar"];

document.getElementById("date").innerHTML = "📅 Today:" + newDate() + toDatetoString();

function checkattandence(){

    let name = document.getElementById("empname").value.trim();

    let resultdiv = document.getElementById("result");

    let found = false;

    for(let i=0; i < employee.length; i++ ){
        if(employee[i].toLocaleLowerCase() === name.toLocaleLowerCase()){
            found = true;
            break;
        }

    }

    if(found){
        resultdiv.innerHTML = "✅ <span class = 'present' >" + name + "is present today</span>"

    }else {
        resultdiv.innerHTML = "❌ <span class = 'absent'" + name + "is absent today</span>"
    }
        
}