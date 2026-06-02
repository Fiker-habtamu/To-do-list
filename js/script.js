// let add_list_btn = $("#add_list");
// let add_task_btn = $("#add_task");
// let list_name_taker = $(".list_name_taker");
// let task_taker_div = $(".task_taker");
// let ttd_input = $(".task_taker > input");
// let cancel_add_list = $("#cancel_btn");
// let cancel_add_task = $("#cancel_task_btn");
// let push_add_list_btn = $("#add_list_btn");
// let list_name_input = $("#list_name");
// let list_name_t = $("#list_name_t");
// let listItems = $(".listItems");
// let ft_list = $(".ft_list");
// let each = $(".lists");
// let push_to_task = $("#push_to_task");
// let task = $(".tasks");
// let ds_listN = $("#display_name");

// // lists
// let lists = [
//   {
//     name: "All",
//     task: [{ tname: "work", finished: false }],
//   },
// ];

// // to display the first list name
// ds_listN.text(`${lists[0].name}`);
// listItems.html(
//   `<h3 id="${lists[0].name}" class="lists sm:text-3xl sm:font-light">${lists[0].name}</h3>`,
// );
// lists[0].task.shift();

// // To display the lists in list container
// let renderListName = (listName) => {
//   listItems.append(
//     `<h3 id="${listName}" class="lists capitalize sm:text-3xl sm:font-light">${listName}</h3>`,
//   );
// };

// // to show list name taker div
// add_list_btn.on("click", () => {
//   list_name_taker.removeClass("hidden");
// });
// // to show task name taker div and lists
// add_task_btn.on("click", () => {
//   task_taker_div.removeClass("hidden");
//   ft_list.html("");
//   lists.forEach((eachList) => {
//     element = `<h3 class="list_task cursor-pointer mt">${eachList.name}</h3>`;
//     ft_list.append(element);
//   });
// });
// // to know which lists is chosen and do the function
// ft_list.on("click", ".list_task", function () {
//   let clickedList = $(this).text();
//   let click = lists.find((l) => l.name === clickedList);
//   let taskName = list_name_t.val();
//   if (taskName.trim().length === 0) {
//     alert("pls insert the name");
//     return;
//   }
//   click.task.push({ tname: taskName, finished: false });
//   task_taker_div.addClass("hidden");
//   list_name_t.val(" ");
// });

// // to cancel or remove the list name taker div
// cancel_add_list.on("click", () => {
//   list_name_taker.addClass("hidden");
// });

// // to cancel or remove the task name taker div
// cancel_add_task.on("click", () => {
//   task_taker_div.addClass("hidden");
// });

// // to push or add list name and task in the list array
// push_add_list_btn.on("click", () => {
//   let name = list_name_input.val();
//   if (name.trim().length === 0) {
//     alert("pls insert the name");
//     return;
//   }
//   lists.push({ name: name, task: [] });
//   list_name_taker.addClass("hidden");
//   listItems.html(" ");
//   lists.forEach((eachList) => {
//     renderListName(eachList.name);
//   });
//   list_name_input.val(" ");
// });

// // let finishedT = null;
// // let foundTask = null;
// // task.on("change", ".finished", function () {
// //   let task_p = $(this).closest(".each-task").find(".task_p");
// //   let task_name = task_p.text();
// //   lists.forEach((l,listIndex) => {
// //     let t = l.task.find((t,taskIndex) => t.tname === task_name);
// //     if (t) {
// //       foundTask = t;
// //     }
// //   });
// //   finishedT = foundTask.finished;
// //   if ($(this).prop("checked")) {
// //     foundTask = true
// //   } else {
// //     foundTask = false;
// //   }
// //   console.log(finishedT);

// //   if (finishedT) {
// //     task_p.addClass("line-through");
// //   } else {
// //     task_p.removeClass("line-through");
// //   }
// //   lists.forEach((l) => {
// //         l.task.forEach((t) => {
// //             console.log(`Task: ${t.tname} | Finished: ${t.finished}`);
// //         });
// //     });
// // });

// let finishedT = null;
// let foundTask = null;

// task.on("change", ".finished", function () {
//   let task_p = $(this).closest(".each-task").find(".task_p");
//   let task_name = task_p.text().trim(); // Added .trim() to prevent spacing bugs
  
//   // 1. Find the object inside the array
//   lists.forEach((l) => {
//     let t = l.task.find((t) => t.tname === task_name);
//     if (t) {
//       foundTask = t;
//     }
//   });

//   if (foundTask) {
//     // 2. Update the property directly ON the found object
//     if ($(this).prop("checked")) {
//       foundTask.finished = true;
//     } else {
//       foundTask.finished = false;
//     }

//     // 3. Keep your global variable in sync if you need it elsewhere
//     finishedT = foundTask.finished; 
//     console.log("Updated task state to:", finishedT);

//     // 4. Update the UI using the freshly changed state
//     if (finishedT) {
//       task_p.addClass("line-through");
//     } else {
//       task_p.removeClass("line-through");
//     }
//   }

//   // 5. Print out your main list data to watch it update in real time!
//   // lists.forEach((l) => {
//   //   l.task.forEach((t) => {
//   //     console.log(`Task: ${t.tname} | Finished: ${t.finished}`);
//   //   });
//   // });
// });

// // to display the task when the list is clicked
// // listItems.on("click", ".lists", function () {
// //   let clicked = $(this).text();
// //   let click = lists.find((l) => l.name === clicked);
// //   task.html(" ");
// //   // if the clicked list is all it display all tasks
// //   if (clicked == "All") {
// //     console.log("all clicked");
// //     lists.forEach((eachList) => {
// //       eachList.task.forEach((eachTask) => {
// //         task.append(
// //           `<div class="each-task">
// // 					<input type="checkbox" name="" class="finished">
// // 					<p class="task_p">${eachTask.tname}</p>
// // 				</div>`,
// //         );
// //       });
// //     });
// //   } else {
// //     let t = click.task.forEach((e) => console.log(e.finished));
// //     console.log(t);
// //     click.task.forEach((eachTask) => {
// //       task.append(
// //         `<div class="each-task">
// // 					<input type="checkbox" name="" id="" class="finished">
// // 					<p class="task_p ">${eachTask.tname}</p>
// // 				</div>`,
// //       );
// //     });
// //   }
// //   ds_listN.text(clicked);
// // });

// listItems.on("click", ".lists", function () {
//   let clicked = $(this).text();
//   task.html(" ");
  
//   // 1. Handle "All" completely separately so it never searches the array
//   if (clicked.trim() === "All") {
//     console.log("all clicked");
//     lists.forEach((eachList) => {
//       eachList.task.forEach((eachTask) => {
//         let isChecked = eachTask.finished ? "checked" : "";
//         let hasLineThrough = eachTask.finished ? "line-through" : "";

//         task.append(
//           `<div class="each-task">
//             <input type="checkbox" name="" class="finished" ${isChecked}>
//             <p class="task_p ${hasLineThrough}">${eachTask.tname}</p>
//           </div>`
//         );
//       });
//     });
//   } 
//   // 2. Only look for a matching list if it's NOT the "All" tab
//   else {
//     let click = lists.find((l) => l.name === clicked);
//     console.log(click); // This won't be undefined anymore for your custom lists!

//     // Safety guard: Make sure the list actually exists in your data before looping
//     if (click && click.task) {
//       click.task.forEach((eachTask) => {
//         let isChecked = eachTask.finished ? "checked" : "";
//         let hasLineThrough = eachTask.finished ? "line-through" : "";

//         task.append(
//           `<div class="each-task">
//             <input type="checkbox" name="" class="finished" ${isChecked}>
//             <p class="task_p ${hasLineThrough}">${eachTask.tname}</p>
//           </div>`
//         );
//       });
//     } else {
//       console.error(`Could not find a list named "${clicked}" in your lists data array.`);
//     }
//   }
  
//   ds_listN.text(clicked);
// });








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

// Main Lists Source of Truth Data array
let lists = [
  {
    name: "All",
    task: [],
  },
];

// Helper Function: Keeps UI rendering logic in one clean place to reuse
const renderTasks = (currentListName) => {
  task.html(" "); // Clear current view
  let normalizedListName = currentListName.trim().toLowerCase();

  if (normalizedListName === "all") {
    lists.forEach((eachList) => {
      eachList.task.forEach((eachTask) => {
        let isChecked = eachTask.finished ? "checked" : "";
        let hasLineThrough = eachTask.finished ? "line-through" : "";
        task.append(
          `<div class="each-task flex items-center gap-2 my-1">
            <input type="checkbox" class="finished" ${isChecked}>
            <p class="task_p ${hasLineThrough}">${eachTask.tname}</p>
          </div>`
        );
      });
    });
  } else {
    let currentListObj = lists.find((l) => l.name.trim().toLowerCase() === normalizedListName);
    if (currentListObj && currentListObj.task) {
      currentListObj.task.forEach((eachTask) => {
        let isChecked = eachTask.finished ? "checked" : "";
        let hasLineThrough = eachTask.finished ? "line-through" : "";
        task.append(
          `<div class="each-task flex items-center gap-2 my-1">
            <input type="checkbox" class="finished" ${isChecked}>
            <p class="task_p ${hasLineThrough}">${eachTask.tname}</p>
          </div>`
        );
      });
    }
  }
};

// Initialization setup
ds_listN.text(`${lists[0].name}`);
listItems.html(
  `<h3 id="${lists[0].name}" class="lists sm:text-3xl sm:font-light cursor-pointer">${lists[0].name}</h3>`
);

// To display the lists in list container
let renderListName = (listName) => {
  listItems.append(
    `<h3 id="${listName}" class="lists capitalize sm:text-3xl sm:font-light cursor-pointer">${listName}</h3>`
  );
};

// Show list name taker modal
add_list_btn.on("click", () => {
  list_name_taker.removeClass("hidden");
});

// Show task name taker modal and populate categories
add_task_btn.on("click", () => {
  task_taker_div.removeClass("hidden");
  ft_list.html("");
  lists.forEach((eachList) => {
    // Skip displaying 'All' as a storage bucket choice for new tasks
    if (eachList.name.trim().toLowerCase() !== "all") {
      let element = `<h3 class="list_task cursor-pointer bg-cyan-800 p-1 rounded text-center text-white text-sm capitalize">${eachList.name}</h3>`;
      ft_list.append(element);
    }
  });
});

// FIXED: Task Insertion Handler
ft_list.on("click", ".list_task", function () {
  let clickedList = $(this).text().trim().toLowerCase();
  let taskName = list_name_t.val().trim();

  if (taskName.length === 0) {
    alert("Please insert a task name");
    return;
  }

  // Find destination list matching normalized string names
  let click = lists.find((l) => l.name.trim().toLowerCase() === clickedList);
  
  if (click) {
    click.task.push({ tname: taskName, finished: false });
    task_taker_div.addClass("hidden");
    list_name_t.val("");
    
    // FIX 2: Instantly refresh the view screen to show your new task!
    renderTasks(ds_listN.text());
  }
});

// Close Modals
cancel_add_list.on("click", () => {
  list_name_taker.addClass("hidden");
});
cancel_add_task.on("click", () => {
  task_taker_div.addClass("hidden");
});

// Create list category
push_add_list_btn.on("click", () => {
  let name = list_name_input.val().trim();
  if (name.length === 0) {
    alert("Please insert a list name");
    return;
  }
  
  lists.push({ name: name, task: [] });
  list_name_taker.addClass("hidden");
  listItems.html("");
  
  lists.forEach((eachList) => {
    renderListName(eachList.name);
  });
  list_name_input.val("");
});

// FIXED: Checkbox Status Change Listener
task.on("change", ".finished", function () {
  let task_p = $(this).closest(".each-task").find(".task_p");
  let task_name = task_p.text().trim().toLowerCase(); 
  
  // FIX 1: Variables localized inside scope blocks cleanly every single execution loop
  let foundTask = null;
  let isChecked = $(this).prop("checked");

  // Search structural tree loop targeting match values cleanly
  lists.forEach((l) => {
    let t = l.task.find((t) => t.tname.trim().toLowerCase() === task_name);
    if (t) {
      foundTask = t;
    }
  });

  if (foundTask) {
    foundTask.finished = isChecked; // Mutate direct array index map pointers
    
    if (isChecked) {
      task_p.addClass("line-through");
    } else {
      task_p.removeClass("line-through");
    }
  }
});

// FIXED: Category Switch Sidebar Click Handler
listItems.on("click", ".lists", function () {
  let clicked = $(this).text().trim();
  ds_listN.text(clicked);
  renderTasks(clicked); // Runs re-rendering sequence cleanly retaining state rules
});