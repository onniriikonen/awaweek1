const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const data = [
    { title: "Rottweiler", text: "Rottweiler", breed: "rottweiler" },
    { title: "Saluki", text: "Saluki", breed: "saluki"},
    { title: "Pug", text: "Pug", breed: "pug" },
    { title: "German shepherd", text: "German_shepherd", breed: "germanshepherd" },
    { title: "Beagle", text: "Beagle", breed: "beagle" }

];

async function fetchImage(breed) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    return data.message;
}

async function fetchText(text) {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${text}`);
    const data = await response.json();
    return data.extract;
}

async function create({ title, text, breed }) {

    const img = await fetchImage(breed);
    const info = await fetchText(text);

    const wikiItem = document.createElement("div");
    wikiItem.classList.add("wiki-item");

    const header = document.createElement("h1");
    header.classList.add("wiki-header");
    header.textContent = title;

    const wikiContent = document.createElement("div");
    wikiContent.classList.add("wiki-content");

    const wikiText = document.createElement("p");
    wikiText.classList.add("wiki-text");
    wikiText.textContent = info;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const image = document.createElement("img");
    image.classList.add("wiki-img");
    image.src = img

    imgContainer.appendChild(image);
    wikiContent.appendChild(imgContainer);
    wikiContent.appendChild(wikiText);
    wikiItem.appendChild(header);
    wikiItem.appendChild(wikiContent);

    container.appendChild(wikiItem);
}

data.forEach(create);