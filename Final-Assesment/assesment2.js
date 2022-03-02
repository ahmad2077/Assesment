$(document).ready(function(){
	$('#about').click(function(){
		$('#patty').animate({
      width: "toggle"
    }, 1000);
		console.log('hello');

		});
	$('#myToggleClick').click(function(){
		$('#myToggleContainer').toggle(1000);
		$('#toggle').toggle(1000);
		console.log('hello');
	});
	$('#myToggleClick2').click(function(){
		$('#myToggleContainer2').toggle(1000);
		console.log('hello');
	});
	$('#myToggleClick3').click(function(){
		$('#myToggleContainer3').toggle(1000);
		console.log('hello');
	});
	$('#myToggleClick4').click(function(){
		$('#myToggleContainer4').toggle(1000);
		console.log('hello');
	});
	$('#myToggleClick5').click(function(){
		$('#myToggleContainer5').toggle(1000);
		console.log('hello');
	});
	$("#movie1").hover(
        function()
        {
            $(this).attr("src", "movie1.gif");
        },
        function()
        {
            $(this).attr("src", "movie1.png");
        });
	$("#movie2").hover(
        function()
        {
            $(this).attr("src", "movie2.gif");
        },
        function()
        {
            $(this).attr("src", "movie2.png");
        });
	$("#movie3").hover(
        function()
        {
            $(this).attr("src", "movie3.gif");
        },
        function()
        {
            $(this).attr("src", "movie3.png");
        });
	$("#movie4").hover(
        function()
        {
            $(this).attr("src", "movie4.gif");
        },
        function()
        {
            $(this).attr("src", "movie4.png");
        });
	
});
function verify(){
	var name = document.getElementById('name1');
	var email = document.getElementById('email1');
	var mess = document.getElementById('mess');
	document.getElementById('err1');
	document.getElementById('err2');
	document.getElementById('err3');
	document.getElementById('success');
	if(name.value == ""){
		name.style.border = "3px solid red";
	 	err1.innerText = "Fill up your name";
	 	err1.style.color = "red";
		console.log('hello');
	}else{
		name.style.border = "3px solid green";
	 	}


	if(email.value == ""){
	 	email.style.border = "3px solid red";
	 	err2.innerText = "Fill up your email";
	 	err2.style.color = "red";
		console.log('hello');
	}else{
		email.style.border = "3px solid green";
	 	}


	if(mess.value == ""){
	 	mess.style.border = "3px solid red";
	 	err3.innerText = "Fill up your message";
	 	err3.style.color = "red";
		console.log('hello');
	}else{
		mess.style.border = "3px solid green";
	 	}
	if(name.value != "" && email.value != "" && mess.value != ""){
		alert('Your Message Has been Sent');
		location.reload();

	}

	
}