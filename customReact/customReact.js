const root = document.getElementById('root')

const customElement ={
    type : 'a',
    children : 'click here to go Google',
    props : {
        href : 'https://google.com',
        target : '_blank'
    }
}

function addCustomEle(customElement, container){
    const reactElement = document.createElement(customElement.type);
    reactElement.innerHTML = customElement.children;
    for (const prop in customElement.props) {
        if (prop === "children") continue; 
        reactElement.setAttribute(prop, customElement.props[prop])
    }
    container.appendChild(reactElement);
}

addCustomEle(customElement, root)


