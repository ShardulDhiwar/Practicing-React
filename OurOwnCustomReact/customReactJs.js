const mainContainer = document.getElementById("root");
const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    content: "Go to Google"
};

const createElement = (reactElement, mainContainer) => {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.content;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}

createElement(reactElement, mainContainer);