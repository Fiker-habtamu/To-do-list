let add_list_btn = $("#add_list");
let add_task_btn = $("#add_task");
let list_name_taker = $(".list_name_taker");
let task_taker_div = $(".task_taker");
let ttd_input = $(".task_taker > input")
let cancel_add_list = $("#cancel_btn");
let cancel_add_task = $("#cancel_task_btn");
let push_add_list_btn = $("#add_list_btn");
let list_name_input = $("#list_name");
let list_name_t = $("#list_name_t")
let listItems = $(".listItems");
let ft_list = $(".ft_list");
let each = $(".lists");
let push_to_task = $("#push_to_task");
let task = $(".tasks")

let lists = [
  {
    name: "default",
    task: [{tname:"finish",finished:false}],
  },
];
let element;

let renderListName = (listName) => {
  listItems.append(
    `<h3 id="${listName}" class="lists sm:text-3xl sm:font-light">${listName}</h3>`,
  );
};

listItems.html(
  `<h3 id="${lists[0].name}" class="lists sm:text-3xl sm:font-light">${lists[0].name}</h3>`,
);
add_list_btn.on("click", () => {
  list_name_taker.removeClass("hidden");
});
add_task_btn.on("click", () => {
  task_taker_div.removeClass("hidden");
  ft_list.html("");
  lists.forEach((eachList) => {
    element = `<h3 class="list_task cursor-pointer mt">${eachList.name}</h3>`;
    ft_list.append(element);
  });
});
ft_list.on("click", ".list_task", function() {
    let clickedList = $(this).text();
	let click = lists.find(l => l.name === clickedList)
	let taskName = list_name_t.val()
	if (taskName.trim().length === 0) {
    alert("pls insert the name");
    return;
  }
	click.task.push({tname:taskName,finished:false})
})


cancel_add_list.on("click", () => {
  list_name_taker.addClass("hidden");
});
cancel_add_task.on("click", () => {
  task_taker_div.addClass("hidden");
});
push_add_list_btn.on("click", () => {
  let name = list_name_input.val();
  if (name.trim().length === 0) {
    alert("pls insert the name");
    return;
  }
  lists.push({ name: name, task: [] });
  list_name_taker.addClass("hidden");
  listItems.html(" ");
  lists.forEach((eachList) => {
    renderListName(eachList.name);
  });
  list_name_input.val(" ");
});
push_to_task.on("click", () => {
  console.log(list_task);
});
listItems.on("click",".lists",function(){
	let clicked = $(this).text();
	let click = lists.find(l => l.name === clicked)
	// let eachTask = click.task.map(et => et.tname)
	// console.log(eachTask)
	task.html(" ")
	click.task.forEach((eachTask) =>{
		task.append(
    `<div class="each-task">
					<input type="checkbox" name="" id="">
					<p>${eachTask.tname}</p>
				</div>`,
  );
	}
	)

})

