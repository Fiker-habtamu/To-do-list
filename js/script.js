let add_list_btn = $("#add_list")
let list_name_taker = $(".list_name_taker")
let cancel_add_list = $("#cancel_btn")

add_list_btn.on("click",()=>{
	list_name_taker.removeClass("hidden")
})
cancel_add_list.on("click",()=>{
	list_name_taker.addClass("hidden")
})