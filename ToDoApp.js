const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        let li = document.createElement("li");

        // Add the structure for the task
        li.innerHTML = `
            <span class="circle-icon"></span>
            <span class="task-text">${inputBox.value}</span>
            <span class="delete-icon">&#10006;</span> <!-- Delete Icon (Cross) -->
        `;

        // Add event listener to mark tasks as checked
        li.addEventListener('click', function (event) {
            // Prevent deleting when clicking inside the task item but not on the delete button
            if (event.target.classList.contains('delete-icon')) {
                li.remove(); //Remove Task
            
            } else {
                li.classList.toggle('checked'); // Toggle checked state
                
            }
        });

        // Append the new task to the list container
        listContainer.appendChild(li);
    }

    // Clear the input field
    inputBox.value = '';
    
}

