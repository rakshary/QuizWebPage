insert into questions(question,op1,op2,op3,op4,answer) 
values("Who created internet","Charles babbage","Alan tuning","Vint Cerf","C V raman","3");

insert into questions(question,op1,op2,op3,op4,answer) 
values("Who found computer","Charles babbage","Alan tuning","Vint Cerf","C V raman","1");

insert into questions(question,op1,op2,op3,op4,answer) 
values("In a computer, most processing takes place in _______?","CPU","ALU","CU","Monitor","1");

insert into questions(question,op1,op2,op3,op4,answer) 
values("Who is founder of Java language","Charles babbage","Alan tuning","Vint Cerf","James Gosling","4");

insert into questions(question,op1,op2,op3,op4,answer) 
values("The main computer that stores the files that can be sent to computers that are networked together is:","Clip art","Mother board","Peripheral","File server","4");

insert into questions(question,op1,op2,op3,op4,answer) 
values("Google (www.google.com) is a","Search Engine","Number in Math","Directory of images","Chat service on the web ","1");

insert into questions(question,op1,op2,op3,op4,answer) 
values("Who is the CEO of Google?","Sundar Pichai","Elon Musk","Satya Nadella","Parag Agarwal","1");

insert into questions(question,op1,op2,op3,op4,answer) 
values("www stands for:","World Wide Wares","World Wide War","World Wide Wait","world wide web","4");

insert into questions(question,op1,op2,op3,op4,answer) 
values("Java is presently owned by","Oracle","Sun Microsystems","Windows","Apple","1");

insert into questions(question,op1,op2,op3,op4,answer) 
values("Ctrl, Shift and Alt are called .......... keys.","modifier","function","alphanumeric","adjustment","1");





changeData = function(data){
    console.log("recvd data")
    console.log(data)
    $("#question").html(data["que"])
    $("#op1").html(data["ans"][0])
    $("#op2").html(data["ans"][1])
    $("#op3").html(data["ans"][2])
    $("#op4").html(data["ans"][3])

    
}
$.get("/question",changeData)
$("#op1").click(function(){
    $.get("/answer/1",function(data){
        if(data["answer"]){
            alert("Correct answer")
        }
        else{
            alert("Wrong answer")
        }
    })
})

$("#op2").click(function(){
    $.get("/answer/2",function(data){
        if(data["answer"]){
            alert("Correct answer")
        }
        else{
            alert("Wrong answer")
        }
    })
})

$("#op3").click(function(){
    $.get("/answer/3",function(data){
        if(data["answer"]){
            alert("Correct answer")
        }
        else{
            alert("Wrong answer")
        }
    })
})

$("#op4").click(function(){
    $.get("/answer/4",function(data){
        if(data["answer"]){
            alert("Correct answer")
        }
        else{
            alert("Wrong answer")
        }
    })
})