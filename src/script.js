import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";


const rootDomeElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootDomeElement);

const reactHeadingElement = React.createElement("h1", {}, "Hello React!");

root.render(reactHeadingElement);