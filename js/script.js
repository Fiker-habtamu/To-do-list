let add_list_btn = $("#add_list")
let list_name_taker = $(".list_name_taker")
let cancel_add_list = $("#cancel_btn")
let push_add_list_btn = $("#add_list_btn")
let list_name_input = $("#list_name")
let listItems = $(".listItems")

let lists =[
	{
		name:"default",
		task:[]
	}
]

let renderListName = (listName)=>{
	listItems.append(`<h3 id="${listName}" class="lists sm:text-3xl sm:font-light">${listName}</h3>`)
}

add_list_btn.on("click",()=>{
	list_name_taker.removeClass("hidden")
})
cancel_add_list.on("click",()=>{
	list_name_taker.addClass("hidden")
})
push_add_list_btn.on("click",()=>{
	let name = list_name_input.val()
	lists.push({name:name,task:[]})
	list_name_taker.addClass("hidden")
	listItems.html(" ")
	lists.forEach((eachList)=>{
		renderListName(eachList.name)
	})
})
