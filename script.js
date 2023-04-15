function login(){
  var uname = document.getElementById("username").value;
  var pword = document.getElementById("password").value;
  //alert(urname + " " +pword);
  if(uname=="Bob" && pword == "cake"){
   //alert("welcome you are now logged in!");
    document.body.style.backgroundColor="green";
    document.getElementById("msg").innerHTML="You're logged in!!!";
    document.getElementById("testerPanel").style.display="block";
    document.getElementById("loginPanel").style.display="none";
  }else{
   //alert("incorrect login-please try again!")
    document.body.style.backgroundColor="red";
    document.getElementById("msg").innerHTML="INCORRECT LOGIN!";
    document.getElementById("testerPanel").style.display="none";
    document.getElementById("loginPanel").style.display="block";
  }
}

function testLove(){
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  
  var rand = Math.random() * 100
  rand = Math.floor(rand)
 // alert(rand)
  document.getElementById("msg").innerHTML = name1 +" loves "+name2+" = "+ rand+"%";

  if(rand < 20){
    document.getElementById("msg2").innerHTML = "Bad luck!";
    document.getElementById("myImg2").src="https://i.pinimg.com/736x/62/e4/1b/62e41b862ef1f34df5a7a7d187b08de1.jpg"
  } else if(rand < 50){
    document.getElementById("msg2").innerHTML = "Unlikely!";
    document.getElementById("myImg2").src="https://i.pinimg.com/736x/62/e4/1b/62e41b862ef1f34df5a7a7d187b08de1.jpg"
  } else if(rand < 80){
    document.getElementById("msg2").innerHTML = "Maybe....?";
    document.getElementById("myImg2").src="https://i.pinimg.com/736x/62/e4/1b/62e41b862ef1f34df5a7a7d187b08de1.jpg"
  }else{
    document.getElementById("msg2").innerHTML = "Woo Hoo!";
    document.getElementById("myImg2").src="https://i.pinimg.com/originals/8f/7a/c0/8f7ac0c0ac3e27d50927b0f19f9d2eec.png"
  }
  
}//end of testLove
