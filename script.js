// Get the list container
var listContainer = document.getElementById("myUL");

// 1. Function to Load Data from Local Storage when page opens
function showTask() {
    // If there is data saved, put it inside the list container
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}

// Call this immediately to show tasks properly
showTask();

// 2. Function to Save Data to Local Storage
function saveData() {
    // We save the entire inner HTML of the list container
    localStorage.setItem("data", listContainer.innerHTML);
}

// 3. Create a new list item when clicking on the "Add" button
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        
        // Add the close button (x)
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        // Add to the list
        listContainer.appendChild(li);
    }
    
    // Clear the input
    document.getElementById("myInput").value = "";
    
    // SAVE the changes
    saveData();
}

// 4. Handle Clicks (Checking and Deleting)
// We add ONE event listener to the UL that handles clicks for all LI items
listContainer.addEventListener('click', function(ev) {
    
    // If they clicked the task (LI), toggle checked
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        saveData(); // Save the change
    }
    
    // If they clicked the close button (SPAN), remove the item
    else if (ev.target.tagName === 'SPAN') {
        // We use .remove() instead of display:none so it doesn't clutter storage
        ev.target.parentElement.remove(); 
        saveData(); // Save the change
    }
    
}, false);

// Footer year update
document.getElementById("year").textContent = new Date().getFullYear();