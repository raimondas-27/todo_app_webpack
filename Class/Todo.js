class Todo {
  constructor() {}
  static makeHtmlEl(title) {
    return `
          <li class="item">
              <i class="fa fa-circle-thin" aria-hidden="true"></i>
              <span class="text">${title}</span>
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </li>
          `;
  }
}
