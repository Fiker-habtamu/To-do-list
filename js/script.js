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

// // Main Lists Source of Truth Data array
// let lists = [
//   {
//     name: "All",
//     task: [],
//   },
// ];

// // Helper Function: Keeps UI rendering logic in one clean place to reuse
// const renderTasks = (currentListName) => {
//   task.html(" "); // Clear current view
//   let normalizedListName = currentListName.trim().toLowerCase();

//   if (normalizedListName === "all") {
//     lists.forEach((eachList) => {
//       eachList.task.forEach((eachTask) => {
//         let isChecked = eachTask.finished ? "checked" : "";
//         let hasLineThrough = eachTask.finished ? "line-through" : "";
//         task.append(
//           `<div class="each-task flex items-center gap-2 my-1">
//             <input type="checkbox" class="finished" ${isChecked}>
//             <p class="task_p ${hasLineThrough}">${eachTask.tname}</p>
//           </div>`
//         );
//       });
//     });
//   } else {
//     let currentListObj = lists.find((l) => l.name.trim().toLowerCase() === normalizedListName);
//     if (currentListObj && currentListObj.task) {
//       currentListObj.task.forEach((eachTask) => {
//         let isChecked = eachTask.finished ? "checked" : "";
//         let hasLineThrough = eachTask.finished ? "line-through" : "";
//         task.append(
//           `<div class="each-task flex items-center gap-2 my-1">
//             <input type="checkbox" class="finished" ${isChecked}>
//             <p class="task_p ${hasLineThrough}">${eachTask.tname}</p>
//           </div>`
//         );
//       });
//     }
//   }
// };

// // Initialization setup
// ds_listN.text(`${lists[0].name}`);
// listItems.html(
//   `<h3 id="${lists[0].name}" class="lists sm:text-3xl sm:font-light cursor-pointer">${lists[0].name}</h3>`
// );

// // To display the lists in list container
// let renderListName = (listName) => {
//   listItems.append(
//     `<h3 id="${listName}" class="lists capitalize sm:text-3xl sm:font-light cursor-pointer">${listName}</h3>`
//   );
// };

// // Show list name taker modal
// add_list_btn.on("click", () => {
//   list_name_taker.removeClass("hidden");
// });

// // Show task name taker modal and populate categories
// add_task_btn.on("click", () => {
//   task_taker_div.removeClass("hidden");
//   ft_list.html("");
//   lists.forEach((eachList) => {
//     // Skip displaying 'All' as a storage bucket choice for new tasks
//     if (eachList.name.trim().toLowerCase() !== "all") {
//       let element = `<h3 class="list_task cursor-pointer bg-cyan-800 p-1 rounded text-center text-white text-sm capitalize">${eachList.name}</h3>`;
//       ft_list.append(element);
//     }
//   });
// });

// // FIXED: Task Insertion Handler
// ft_list.on("click", ".list_task", function () {
//   let clickedList = $(this).text().trim().toLowerCase();
//   let taskName = list_name_t.val().trim();

//   if (taskName.length === 0) {
//     alert("Please insert a task name");
//     return;
//   }

//   // Find destination list matching normalized string names
//   let click = lists.find((l) => l.name.trim().toLowerCase() === clickedList);
  
//   if (click) {
//     click.task.push({ tname: taskName, finished: false });
//     task_taker_div.addClass("hidden");
//     list_name_t.val("");
    
//     // FIX 2: Instantly refresh the view screen to show your new task!
//     renderTasks(ds_listN.text());
//   }
// });

// // Close Modals
// cancel_add_list.on("click", () => {
//   list_name_taker.addClass("hidden");
// });
// cancel_add_task.on("click", () => {
//   task_taker_div.addClass("hidden");
// });

// // Create list category
// push_add_list_btn.on("click", () => {
//   let name = list_name_input.val().trim();
//   if (name.length === 0) {
//     alert("Please insert a list name");
//     return;
//   }
  
//   lists.push({ name: name, task: [] });
//   list_name_taker.addClass("hidden");
//   listItems.html("");
  
//   lists.forEach((eachList) => {
//     renderListName(eachList.name);
//   });
//   list_name_input.val("");
// });

// // FIXED: Checkbox Status Change Listener
// task.on("change", ".finished", function () {
//   let task_p = $(this).closest(".each-task").find(".task_p");
//   let task_name = task_p.text().trim().toLowerCase(); 
  
//   // FIX 1: Variables localized inside scope blocks cleanly every single execution loop
//   let foundTask = null;
//   let isChecked = $(this).prop("checked");

//   // Search structural tree loop targeting match values cleanly
//   lists.forEach((l) => {
//     let t = l.task.find((t) => t.tname.trim().toLowerCase() === task_name);
//     if (t) {
//       foundTask = t;
//     }
//   });

//   if (foundTask) {
//     foundTask.finished = isChecked; // Mutate direct array index map pointers
    
//     if (isChecked) {
//       task_p.addClass("line-through");
//     } else {
//       task_p.removeClass("line-through");
//     }
//   }
// });

// // FIXED: Category Switch Sidebar Click Handler
// listItems.on("click", ".lists", function () {
//   let clicked = $(this).text().trim();
//   ds_listN.text(clicked);
//   renderTasks(clicked); // Runs re-rendering sequence cleanly retaining state rules
// });


let add_list_btn = $("#add_list");
let add_task_btn = $("#add_task");
let list_name_taker = $(".list_name_taker");
let task_taker_div = $(".task_taker");
let cancel_add_list = $("#cancel_btn");
let cancel_add_task = $("#cancel_task_btn");
let push_add_list_btn = $("#add_list_btn");
let list_name_input = $("#list_name");
let list_name_t = $("#list_name_t");
let listItems = $(".listItems");
let ft_list = $(".ft_list");
let task = $(".tasks");
let ds_listN = $("#display_name");

let lists = [
  { name: "All", task: [] },
];

// ── Render helpers ──────────────────────────────────────────────

const renderTasks = (currentListName) => {
  task.html("");
  let normalized = currentListName.trim().toLowerCase();

  let tasksToShow = [];

  if (normalized === "all") {
    lists.forEach((l) => {
      l.task.forEach((t) => tasksToShow.push({ task: t, listName: l.name }));
    });
  } else {
    let currentList = lists.find((l) => l.name.trim().toLowerCase() === normalized);
    if (currentList) {
      currentList.task.forEach((t) => tasksToShow.push({ task: t, listName: currentList.name }));
    }
  }

  tasksToShow.forEach(({ task: t, listName }) => {
    let isChecked = t.finished ? "checked" : "";
    let lineThrough = t.finished ? "line-through" : "";
    task.append(
      `<div class="each-task flex items-center gap-2 my-1" data-task="${t.tname}" data-list="${listName}">
        <input type="checkbox" class="finished" ${isChecked}>
        <p class="task_p ${lineThrough}">${t.tname}</p>
        <button class="delete-task-btn" title="Delete task">🗑</button>
      </div>`
    );
  });
};

const renderListNames = () => {
  listItems.html("");
  lists.forEach((l) => {
    let isAll = l.name.trim().toLowerCase() === "all";
    let deleteBtn = isAll
      ? ""
      : `<button class="delete-list-btn" data-list="${l.name}" title="Delete list">🗑</button>`;
    listItems.append(
      `<div class="list-row flex items-center justify-between" data-list="${l.name}">
        <h3 class="lists capitalize sm:text-3xl sm:font-light cursor-pointer">${l.name}</h3>
        ${deleteBtn}
      </div>`
    );
  });
};

// ── Init ────────────────────────────────────────────────────────

ds_listN.text(lists[0].name);
renderListNames();

// ── Show modals ─────────────────────────────────────────────────

add_list_btn.on("click", () => list_name_taker.removeClass("hidden"));

add_task_btn.on("click", () => {
  task_taker_div.removeClass("hidden");
  ft_list.html("");
  lists.forEach((l) => {
    if (l.name.trim().toLowerCase() !== "all") {
      ft_list.append(
        `<h3 class="list_task cursor-pointer bg-cyan-800 p-1 rounded text-center text-white text-sm capitalize">${l.name}</h3>`
      );
    }
  });
});

// ── Cancel modals ───────────────────────────────────────────────

cancel_add_list.on("click", () => list_name_taker.addClass("hidden"));
cancel_add_task.on("click", () => task_taker_div.addClass("hidden"));

// ── Add list ────────────────────────────────────────────────────

push_add_list_btn.on("click", () => {
  let name = list_name_input.val().trim();
  if (!name) { alert("Please insert a list name"); return; }
  lists.push({ name, task: [] });
  list_name_taker.addClass("hidden");
  list_name_input.val("");
  renderListNames();
});

// ── Add task ────────────────────────────────────────────────────

ft_list.on("click", ".list_task", function () {
  let clickedList = $(this).text().trim().toLowerCase();
  let taskName = list_name_t.val().trim();
  if (!taskName) { alert("Please insert a task name"); return; }

  let target = lists.find((l) => l.name.trim().toLowerCase() === clickedList);
  if (target) {
    target.task.push({ tname: taskName, finished: false });
    task_taker_div.addClass("hidden");
    list_name_t.val("");
    renderTasks(ds_listN.text());
  }
});

// ── Delete list ─────────────────────────────────────────────────

listItems.on("click", ".delete-list-btn", function (e) {
  e.stopPropagation(); // prevent triggering the list switch
  let listName = $(this).data("list").trim().toLowerCase();
  lists = lists.filter((l) => l.name.trim().toLowerCase() !== listName);

  // If the deleted list was active, fall back to "All"
  if (ds_listN.text().trim().toLowerCase() === listName) {
    ds_listN.text("All");
    renderTasks("All");
  } else {
    renderTasks(ds_listN.text());
  }
  renderListNames();
});

// ── Delete task ─────────────────────────────────────────────────

task.on("click", ".delete-task-btn", function () {
  let row = $(this).closest(".each-task");
  let taskName = row.data("task").trim().toLowerCase();
  let listName = row.data("list").trim().toLowerCase();

  let ownerList = lists.find((l) => l.name.trim().toLowerCase() === listName);
  if (ownerList) {
    ownerList.task = ownerList.task.filter(
      (t) => t.tname.trim().toLowerCase() !== taskName
    );
  }
  renderTasks(ds_listN.text());
});

// ── Switch list ─────────────────────────────────────────────────

listItems.on("click", ".lists", function () {
  let clicked = $(this).text().trim();
  ds_listN.text(clicked);
  renderTasks(clicked);
});

// ── Checkbox toggle ─────────────────────────────────────────────

task.on("change", ".finished", function () {
  let row = $(this).closest(".each-task");
  let taskName = row.data("task").trim().toLowerCase();
  let listName = row.data("list").trim().toLowerCase();
  let isChecked = $(this).prop("checked");

  let ownerList = lists.find((l) => l.name.trim().toLowerCase() === listName);
  if (ownerList) {
    let found = ownerList.task.find((t) => t.tname.trim().toLowerCase() === taskName);
    if (found) found.finished = isChecked;
  }

  let taskP = row.find(".task_p");
  isChecked ? taskP.addClass("line-through") : taskP.removeClass("line-through");
});