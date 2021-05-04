class Actions {
  constructor() {}

  static deleteTodoItem(item) {
    // closest iesko tevinio el
    // console.log(item.closest(".item"));
    console.log("ivyko istrynimas");
    // istrinti el
    item.parentElement.remove();
  }
  static toggleComplete(item) {}
}
