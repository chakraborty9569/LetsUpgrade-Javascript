objs = [
	{
		name: "Yadav",
		age: 30,
		country: "India",
		hobbies: ["Cricket", "Swimming", "Reading"]
	},
	
	{
		name: "Mike",
		age: 25,
		country: "England",
		hobbies: ["Football", "Volley Ball", "Writing"]
	},
	
	{
		name: "Ana",
		age: 46,
		country: "Australia",
		hobbies: ["Gymnastic", "Karate"]
	},
	
	{
		name: "Sumit",
		age: 18,
		country: "India",
		hobbies: ["Football", "Swimming", "Reading"]
	},
	
	{
		name: "Marry",
		age: 49,
		country: "India",
		hobbies: ["Reading", "Cooking"]
	}
]

function display1(){
	for(let i=0; i<objs.length; i++)
	{
		if(objs[i].age<30)
			console.log(objs[i]);
	}
}

function display2(){
	for(let i=0; i<objs.length; i++)
	{
		if(objs[i].country=='India')
			console.log(objs[i]);
	}
}

display1();
display2();