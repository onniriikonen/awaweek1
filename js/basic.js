document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const data = [
        { title: "Dog1", img: "dog/dog1.jpeg", text: "text" },
        { title: "Dog2", img: "dog/dog2.jpeg", text: "text" },
        { title: "Dog3", img: "dog/dog3.jpeg", text: "text" },
        { title: "Dog4", img: "dog/dog4.jpeg", text: "text" },
        { title: "Dog5", img: "dog/dog5.jpeg", text: "text" }

    ];

    function create({ title, img, text }) {
        const wikiItem = document.createElement("div");

        const header = document.createElement("h1");
        header.textContent = title;

        const content = document.createElement("div");

        const paragraph = document.createElement("p");
        paragraph.textContent = text;

        const imgContainer = document.createElement("div");

        const image = document.createElement("img");
        image.src = img

        imgContainer.appendChild(image);
        content.appendChild(paragraph);
        content.appendChild(imgContainer);
        wikiItem.appendChild(header);
        wikiItem.appendChild(content);

        container.appendChild(wikiItem);
    }

    data.forEach(create);
});