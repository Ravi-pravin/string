function updateResult(value) {
    document.getElementById("result").value = value;
}

document.querySelectorAll(".stringbtn").forEach(button => {
    button.addEventListener("click", function () {
        let action = this.innerText.toLowerCase().trim();
        let inputValue = document.getElementById("inputString").value.trim();

        if (inputValue === "" && action !== "length") {
            alert("Please enter a string before using " + action);
            return;
        }

        let result = "";

        switch (action) {
            case "length":
                result = "Length: " + inputValue.length;
                break;
            case "replace":
                let wordToReplace = prompt("Enter word to replace:");
                let replacementWord = prompt("Enter replacement word:");
                result = inputValue.replace(wordToReplace, replacementWord);
                break;
            case "index of":
                let searchTerm = prompt("Enter the word to find index:");
                result = "Index: " + inputValue.indexOf(searchTerm);
                break;
            case "start with":
                let startStr = prompt("Enter starting substring:");
                result = inputValue.startsWith(startStr) ? "Yes" : "No";
                break;
            case "end with":
                let endStr = prompt("Enter ending substring:");
                result = inputValue.endsWith(endStr) ? "Yes" : "No";
                break;
            case "uppercase":
                result = inputValue.toUpperCase();
                break;
            case "lowercase":
                result = inputValue.toLowerCase();
                break;
            case "repeat":
                let times = parseInt(prompt("Enter how many times to repeat:"));
                result = inputValue.repeat(times);
                break;
            case "match":
                let regexMatch = prompt("Enter regex pattern:");
                result = inputValue.match(new RegExp(regexMatch, "g")) || "No match found";
                break;
            case "search":
                let regexSearch = prompt("Enter search term:");
                result = "Position: " + inputValue.search(regexSearch);
                break;
            case "concat":
                let extraText = prompt("Enter text to concatenate:");
                result = inputValue.concat(" ", extraText);
                break;
            case "split":
                let delimiter = prompt("Enter delimiter to split:");
                result = inputValue.split(delimiter).join(" | ");
                break;
            case "trim":
                result = inputValue.trim();
                break;
            case "slice":
                let startIndex = parseInt(prompt("Enter start index:"));
                let endIndex = parseInt(prompt("Enter end index:"));
                result = inputValue.slice(startIndex, endIndex);
                break;
            default:
                alert("Invalid operation!");
        }

        updateResult(result);
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("inputString").value = "";
    updateResult("");
});
