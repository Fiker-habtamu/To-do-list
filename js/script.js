let add_list_btn = $("#add_list");
let add_task_btn = $("#add_task");
let list_name_taker = $(".list_name_taker");
let task_taker_div = $(".task_taker");
let ttd_input = $(".task_taker > input");
let cancel_add_list = $("#cancel_btn");
let cancel_add_task = $("#cancel_task_btn");
let push_add_list_btn = $("#add_list_btn");
let list_name_input = $("#list_name");
let list_name_t = $("#list_name_t");
let listItems = $(".listItems");
let ft_list = $(".ft_list");
let each = $(".lists");
let push_to_task = $("#push_to_task");
let task = $(".tasks");
let ds_listN = $("#display_name");

// lists
let lists = [
  {
    name: "All",
    task: [{ tname: "work", finished: false }],
  },
];

// to display the first list name
ds_listN.text(`${lists[0].name}`);
listItems.html(
  `<h3 id="${lists[0].name}" class="lists sm:text-3xl sm:font-light">${lists[0].name}</h3>`,
);
lists[0].task.shift();

// To display the lists in list container
let renderListName = (listName) => {
  listItems.append(
    `<h3 id="${listName}" class="lists capitalize sm:text-3xl sm:font-light">${listName}</h3>`,
  );
};

// to show list name taker div
add_list_btn.on("click", () => {
  list_name_taker.removeClass("hidden");
});
// to show task name taker div and lists
add_task_btn.on("click", () => {
  task_taker_div.removeClass("hidden");
  ft_list.html("");
  lists.forEach((eachList) => {
    element = `<h3 class="list_task cursor-pointer mt">${eachList.name}</h3>`;
    ft_list.append(element);
  });
});
// to know which lists is chosen and do the function
ft_list.on("click", ".list_task", function () {
  let clickedList = $(this).text();
  let click = lists.find((l) => l.name === clickedList);
  let taskName = list_name_t.val();
  if (taskName.trim().length === 0) {
    alert("pls insert the name");
    return;
  }
  click.task.push({ tname: taskName, finished: false });
  task_taker_div.addClass("hidden");
  list_name_t.val(" ");
});

// to cancel or remove the list name taker div
cancel_add_list.on("click", () => {
  list_name_taker.addClass("hidden");
});

// to cancel or remove the task name taker div
cancel_add_task.on("click", () => {
  task_taker_div.addClass("hidden");
});

// to push or add list name and task in the list array
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

// let finishedT = null;
// let foundTask = null;
// task.on("change", ".finished", function () {
//   let task_p = $(this).closest(".each-task").find(".task_p");
//   let task_name = task_p.text();
//   lists.forEach((l,listIndex) => {
//     let t = l.task.find((t,taskIndex) => t.tname === task_name);
//     if (t) {
//       foundTask = t;
//     }
//   });
//   finishedT = foundTask.finished;
//   if ($(this).prop("checked")) {
//     foundTask = true
//   } else {
//     foundTask = false;
//   }
//   console.log(finishedT);

//   if (finishedT) {
//     task_p.addClass("line-through");
//   } else {
//     task_p.removeClass("line-through");
//   }
//   lists.forEach((l) => {
//         l.task.forEach((t) => {
//             console.log(`Task: ${t.tname} | Finished: ${t.finished}`);
//         });
//     });
// });

let finishedT = null;
let foundTask = null;

task.on("change", ".finished", function () {
  let task_p = $(this).closest(".each-task").find(".task_p");
  let task_name = task_p.text().trim(); // Added .trim() to prevent spacing bugs
  
  // 1. Find the object inside the array
  lists.forEach((l) => {
    let t = l.task.find((t) => t.tname === task_name);
    if (t) {
      foundTask = t;
    }
  });

  if (foundTask) {
    // 2. Update the property directly ON the found object
    if ($(this).prop("checked")) {
      foundTask.finished = true;
    } else {
      foundTask.finished = false;
    }

    // 3. Keep your global variable in sync if you need it elsewhere
    finishedT = foundTask.finished; 
    console.log("Updated task state to:", finishedT);

    // 4. Update the UI using the freshly changed state
    if (finishedT) {
      task_p.addClass("line-through");
    } else {
      task_p.removeClass("line-through");
    }
  }

  // 5. Print out your main list data to watch it update in real time!
  // lists.forEach((l) => {
  //   l.task.forEach((t) => {
  //     console.log(`Task: ${t.tname} | Finished: ${t.finished}`);
  //   });
  // });
});

// to display the task when the list is clicked
// listItems.on("click", ".lists", function () {
//   let clicked = $(this).text();
//   let click = lists.find((l) => l.name === clicked);
//   task.html(" ");
//   // if the clicked list is all it display all tasks
//   if (clicked == "All") {
//     console.log("all clicked");
//     lists.forEach((eachList) => {
//       eachList.task.forEach((eachTask) => {
//         task.append(
//           `<div class="each-task">
// 					<input type="checkbox" name="" class="finished">
// 					<p class="task_p">${eachTask.tname}</p>
// 				</div>`,
//         );
//       });
//     });
//   } else {
//     let t = click.task.forEach((e) => console.log(e.finished));
//     console.log(t);
//     click.task.forEach((eachTask) => {
//       task.append(
//         `<div class="each-task">
// 					<input type="checkbox" name="" id="" class="finished">
// 					<p class="task_p ">${eachTask.tname}</p>
// 				</div>`,
//       );
//     });
//   }
//   ds_listN.text(clicked);
// });

listItems.on("click", ".lists", function () {
  let clicked = $(this).text().trim(); // Added trim to ensure exact string matching
  let click = lists.find((l) => l.name === clicked);
  task.html(" ");

  // If the clicked list is all, it displays all tasks
  if (clicked == "All") {
    console.log("all clicked");
    lists.forEach((eachList) => {
      eachList.task.forEach((eachTask) => {
        // 1. Determine if attributes/classes need to be added based on the data state
        let isChecked = eachTask.finished ? "checked" : "";
        let hasLineThrough = eachTask.finished ? "line-through" : "";

        // 2. Inject those dynamic variables directly into your string template
        task.append(
          `<div class="each-task">
            <input type="checkbox" name="" class="finished" ${isChecked}>
            <p class="task_p ${hasLineThrough}">${eachTask.tname}</p>
          </div>`
        );
      });
    });
  } else {
    if (click) { // Added a quick check to make sure the list object was successfully found
      click.task.forEach((eachTask) => {
        // 1. Determine state for the individual selected list
        let isChecked = eachTask.finished ? "checked" : "";
        let hasLineThrough = eachTask.finished ? "line-through" : "";

        // 2. Render with state intact
        task.append(
          `<div class="each-task">
            <input type="checkbox" name="" id="" class="finished" ${isChecked}>
            <p class="task_p ${hasLineThrough}">${eachTask.tname}</p>
          </div>`
        );
      });
    }
  }
  ds_listN.text(clicked);
});