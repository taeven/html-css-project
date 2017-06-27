
$(document).ready(function(){



//function onld()
$('#container-iframe').on('load',function(){
	if($('#container-iframe').attr('src').search("contact")!=-1)
	{
		if(id!=-1)
		$('#container-iframe').contents().find('#name-contact').append(contactList[id].name);
		else{
			console.log("id not defined");
		}

		console.log('yo again');
	}
	else{
		console.log('nope');
	}
});
});



var contactList;
var id =-1;

function clicked(ID){
		id=ID;
		console.log("item: "+id);
		
		var contact = contactList[id];
		$('#container-iframe').attr('src','./contact.html');
		
	// document.getElementById('container-iframe').src="./contact.html";
	}

function createContact()
{
	var iframe = document.getElementById("container-iframe");
	if(iframe.src!="./create-new.html")
	iframe.src="./create-new.html";
}



function addContact()
{
	var container = $('#contacts');
	$.getJSON('http://192.168.43.97:8081/contact-list',function(response){
		console.log(response);
		contactList = response;
		var contact;
		container.empty();
		for(contact in response)
		{
		container.append("<div name='contact-item' class='contact-list-item' onclick='clicked("+id+")'id='"+
			contact+"'>"+"<div class='text-list-item'>"+response[contact].name+"</div></div>");
		}
	});

}
