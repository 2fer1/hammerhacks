let index = 0;

function changeQuote() {
    let quotes = [
        '"Had I been present at the Creation, I would have given some useful hints for the better ordering of the universe. ~ Alfonso X of Castile ~"',
        '"That is too easy" - Lebron James',
        '"The bird is the word" - Peter Griffin'
    ];

    let blockquote = document.querySelector("blockquote");
    blockquote.innerHTML = quotes[index];

    index++;

    if (index >= 3) {
        index = 0;
    }
}