function validate()
{
	var name = document.forms["create-contact-form"]["name"].value;
	var phone= document.forms["create-contact-form"]['phone'].value;
	var radio = document.getElementsByName("gender");
	if(name =="")
	{
		alert("Name should not be empty!!");
		return false;
	}
	else if(isNaN(Number(phone)) || phone=="")
	{

		alert("Phone should be a numerical field!!");
		return false;
	}
	else
	{
		var i=0;
		for(i=0;i<radio.length;i++)
		{
			if(radio[i].checked)
			{
				flag=true;
				return true;
			}
		}
		alert("select a gender!!");
		return false
	}
}