let form = document.getElementById("form");
let userType;
let consoleMsg;
let consoleOutput = document.getElementById("console-output");
let console = document.querySelector(".console");
const actualConsole = document.querySelector(".actual-console");
let returnConsole;

function returnConsoleCustom(usertyped, outputmsg) {
  const consoleEL = document.createElement("div");
  consoleEL.classList.add("return-console");
  consoleEL.innerHTML = `<div class="info-container">
  <p class="user">guest@guest_PC</p>
  <p class="terminal">Console</p>
  <p class="directory">~/MyPortfolio</p>
</div>
<div class="user-input-container">
  <form id="form">
    <p>$</p>
    <input
      type="text"
      onblur="this.focus()"
      class="user-type" value="${usertyped}"
      autofocus
    />
  </form>
  <div class="console-output" id="console-output">${outputmsg}</div>
</div>`;
  console.insertBefore(consoleEL, actualConsole);
}
function returnConsoleUnknown(usertyped) {
  const consoleEL = document.createElement("div");
  consoleEL.classList.add("return-console");
  consoleEL.innerHTML = `<div class="info-container">
    <p class="user">guest@guest_PC</p>
    <p class="terminal">Console</p>
    <p class="directory">~/MyPortfolio</p>
  </div>
  <div class="user-input-container">
    <form id="form">
      <p>$</p>
      <input
        type="text"
        onblur="this.focus()"
        class="user-type" value="${usertyped}"
        autofocus
      />
    </form>
    <div class="console-output" id="console-output">Console: ${usertyped}: command not found <br><br> type 'help' to see a list of commands</div>
  </div>`;
  console.insertBefore(consoleEL, actualConsole);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userType = document.getElementById("user-type").value;
  /**/
  if (userType == "help") {
    returnConsoleCustom(
      userType,
      "[Console-simulation portfolio, created by Santos] <br><br> clear: to clear all of your previous commands <br><br> contact: to see all my contact info"
    );
  } else if (userType == "clear") {
    document.location.reload();
  } else if (userType == "contact") {
    returnConsoleCustom(
      userType,
      `
      My GitHub: <a href="https://github.com/SantosZuber" target="_blank" >https://github.com/SantosZuber</a> <br><br>
      My LinkedIn: <a href="https://www.linkedin.com/in/santos-zuberbuhler" target="_blank" >https://www.linkedin.com/in/santos-zuberbuhler</a> <br><br>
      My E-mail: <a href="mailto:santoszuberbuhler2003@gmail.com" target="_blank" >santoszuberbuhler2003@gmail.com</a>
      `
    );
  } else {
    returnConsoleUnknown(userType);
  }
  /**/
  userType = document.getElementById("user-type").value = "";
  actualConsole.scrollIntoView();
});
