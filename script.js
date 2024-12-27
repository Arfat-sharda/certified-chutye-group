// Example JavaScript to dynamically add members and admins (if needed)

// Admins and Members Data
const admins = ["Admin 1", "Admin 2", "Admin 3"];
const members = ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5"];

// Function to populate the list
function populateList(listId, items) {
  const list = document.getElementById(listId);
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

// Populate Admins and Members List
populateList('admins-list', admins);
populateList('members-list', members);
