const wikiItem = document.createElement("div");
wikiItem.classList.add("wiki-item");
document.body.appendChild(wikiItem);

const data = [
    { title: "Dog1", img: "dog/dog1.jpeg", text: "text" },
    { title: "Dog2", img: "dog/dog2.jpeg", text: "text" },
    { title: "Dog3", img: "dog/dog3.jpeg", text: "text" },
    { title: "Dog4", img: "dog/dog4.jpeg", text: "text" },
    { title: "Dog5", img: "dog/dog5.jpeg", text: "text" }

];

function create({ title, img, text }) {
    

    const header = document.createElement("h1");
    header.classList.add("wiki-header");
    header.textContent = title;

    const wikiContent = document.createElement("div");
    wikiContent.classList.add("wiki-content");

    const wikiText = document.createElement("p");
    wikiText.classList.add("wiki-text");
    wikiText.textContent = text;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const image = document.createElement("img");
    image.classList.add("wiki-img");
    image.src = img

    imgContainer.appendChild(image);
    wikiContent.appendChild(wikiText);
    wikiContent.appendChild(imgContainer);
    wikiItem.appendChild(header);
    wikiItem.appendChild(wikiContent);
}

data.forEach(create);