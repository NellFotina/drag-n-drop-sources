//видео на ютубе к уроку
// https://www.youtube.com/watch?v=JhaiRth3Qw4

//Запомните, что только drag-события срабатывают на протяжении
//операции перемещения; события мыши, такие как mousemove - нет.
//Также запомните, что события dragstart и dragend не срабатывают при
//попытке перенести файл из операционной системы в браузер.

const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

//console.log(item)

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  //console.log(placeholder)
  //dragover - событие, когда элемент над placeholder
  //срабатывает каждые несколько сотен миллисекунд, когда перемещаемый
//элемент оказывается над зоной, принимающей перетаскиваемые элементы.
  placeholder.addEventListener("dragover", dragover);
  //dragenter - событие, мы заходим на территорию placeholder
  //Срабатывает, когда перемещаемый элемент попадает
//на элемент-назначение. Обработчик этого события показывает, что 
//элемент находится над объектом на который он может быть перенесён.
  placeholder.addEventListener("dragenter", dragenter);
  //dragleave - событие, мы перетащили и вышли оттуда запускается 
  //в момент перетаскивания, когда курсор мыши выходит за пределы элемента.
  placeholder.addEventListener("dragleave", dragleave);
  //drop - событие, когда элемент отпустили
  //вызывается для элемента, над которым произошло "сбрасывание" перемещаемого
//элемента. Событие отвечает за извлечение "сброшенных" данных и их вставку.
  placeholder.addEventListener("drop", dragdrop);
  
  //drag - Запускается при перемещении элемента или выделенного текста.
}

function dragstart(event) {
  // console.log("dragstart", event.target);
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hidden"), 0);
}

function dragend(event) {
  //console.log("dragend", event.target);
  //event.target.classList.remove("hold", "hidden");
  //ИЛИ можно заменить такой строкой:
  event.target.className = "item";
}

function dragover(event) {
  event.preventDefault();
  //console.log("dragover");
}

function dragenter(event) {
  event.target.classList.add("hovered");
  //console.log("dragenter");
}
function dragleave(event) {
  event.target.classList.remove("hovered");

  //console.log("dragleave");
}
function dragdrop(event) {
  event.target.classList.remove("hovered");

  event.target.append(item);

  //console.log("dragdrop");
}
