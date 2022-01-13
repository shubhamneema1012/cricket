const review = () => {
    const one = (arg) => {
        let first = document.createElement("div");
        document.getElementById("Screen").appendChild(first);
        first.setAttribute("class", "col-md-4");
        setTimeout(() => {
            let second = document.createElement("h1");
            let st = document.createTextNode("impact");
            first.appendChild(second);
            second.appendChild(st);
        }, 5000)
        setTimeout(() => {
            let second = document.createElement("h1");
            let st = document.createTextNode(arg);
            first.appendChild(second);
            second.appendChild(st);
        }, 8000)
    }
    setTimeout(one("EVEN"),1000)
}
