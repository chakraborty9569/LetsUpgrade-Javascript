objs = [
	{
		name: "Yadav",
		age: 18,
		country: "Sri Lanka",
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
		age: 24,
		country: "Australia",
		hobbies: ["Gymnastic", "Karate"]
	},
	
	{
		name: "Sumit",
		age: 18,
		country: "India",
		hobbies: ["Football", "Swimming", "Reading"]
	}
]

function display(){
	for(let i=0; i<objs.length; i++)
		console.log(objs[i]);
}

display();