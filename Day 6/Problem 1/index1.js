objs = [
	{
		name: "Sumit",
		age: 21,
		city: "Kolkata",
		salary: 20000
	},
	
	{
		name: "Karim",
		age: 26,
		city: "Delhi",
		salary: 35000
	},
	
	{
		name: "Azaad",
		age: 31,
		city: "Mumbai",
		salary: 30000
	},
	
	{
		name: "Shreyas",
		age: 40,
		city: "Bangalore",
		salary: 45000
	},
	
	{
		name: "Kunal",
		age: 25,
		city: "Chennai",
		salary: 51000
	}
]

function display(obj){
	let addElements="";
	
	obj.forEach(function(ob, index){
		let addRow = `<tr>
					<td>${index+1}</td>
					<td>${ob.name}</td>
					<td>${ob.age}</td>
					<td>${ob.city}</td>
					<td>${ob.salary}</td>
					<td><button onclick="deleteElement(${index})">Delete</button></td>
				  </tr>`;
		addElements += addRow;
	});
	document.getElementsByClassName('table-body')[0].innerHTML = addElements;
}

display(objs);

function searchDisplay(){
	let searchEle = document.getElementById("input").value;
	
	let searchArray = objs.filter(function(o){
		return (
		o.name.toLowerCase().indexOf(searchEle.toLowerCase())!=-1 || o.city.toLowerCase().indexOf(searchEle.toLowerCase())!=-1);
	});
	display(searchArray);
}

function deleteElement(index){
	objs.splice(index, 1);
	display(objs);
}