// function List(id,name,task){
// 	this.id = id;
// 	this.name = name;
// 	this.task = task;
// }

// let list1 = new List(1,"weekly",[{id:1,name:"finish a project",progress:"unfinished"}])

// let lists = [{}]


// lists[0].id = 1
// lists[0].name = "monthly"
// lists[0].task = {
// 	id:1,
// 	name:"take a shower",
// 	progress:"unfinished"
// }
// lists[1].id = 2
// lists[1].name = "weekly"
// lists[1].task = {
// 	id:2,
// 	name:"finish project",
// 	progress:"unfinished"
// }

let lists = [
	{
		id:1,
		name:"daily",
		task:[{
			id,
			taskName
		}]
	}
]

let addToLists = (id,name,task)=>{
	lists.push({id:id,name:name,task,task})
}

addToLists(2,"weekly",{id:1,taskName:"study"})

console.log(lists)
