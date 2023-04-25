const heading1 = React.createElement("h1",{},"Namaste React!!");
const heading2 = React.createElement("h2",{},"Namaste React!! h2");
const container = React.createElement("div",{},[heading1,heading2]);
// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)