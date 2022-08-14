$("document").ready(function()
{
    //write the program to send request
    var questionId=0
    var data=[]
    
    setQuestion=function(id){
        console.log(data)
        console.log("setting question")
        console.log(data)
        q=data[id]
        $("#question").html(q["que"])
        $("#op1").html(q["ans"][0])
        $("#op2").html(q["ans"][1])
        $("#op3").html(q["ans"][2])
        $("#op4").html(q["ans"][3])
    }
    $.get("/question",function(d){
        for(i=0;i<d.length;i++)
            data.push(d[i])
        setQuestion(questionId)
    })
    
    $("#next").click(function(){
        questionId+=1
        if(questionId>=data.length){
            questionId=data.length-1
        }
        setQuestion(questionId)
    })

    $("#prev").click(function(){
        questionId-=1
        if(questionId<=0){
            questionId=0
        }
        setQuestion(questionId)
    })

    $("#op1").click(function(){
        if(data[questionId]["key"]=="1"){
            alert("Correct answer")
        }
        else{
            alert("Wrong answer")
        }
    })

    $("#op2").click(function(){
        if(data[questionId]["key"]=="2"){
            alert("Correct answer")
        }
        else{
            alert("Wrong answer")
        }
    })

    $("#op3").click(function(){
        if(data[questionId]["key"]=="3"){
            alert("Correct answer")
        }
        else{
            alert("Wrong answer")
        }
    })

    $("#op4").click(function(){
        if(data[questionId]["key"]=="4"){
            alert("Correct answer")
        }
        else{
            alert("Wrong answer")
        }
    })
    
});