const toggleBtn = document.getElementById('toggleBtn');
const rightPanel = document.getElementById('rightPanel');

// Toggle expand/collapse
toggleBtn.addEventListener('click', () => {
    rightPanel.classList.toggle('expanded');
    toggleBtn.textContent = rightPanel.classList.contains('expanded') ? '⬅' : '➡';
});

// Show only selected section
function showSection(sectionId) {
    // Remove active class from all buttons
    document.querySelectorAll('.left-bar button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    const clickedBtn = Array.from(document.querySelectorAll('.left-bar button'))
        .find(btn => btn.getAttribute('onclick')?.includes(sectionId));
    if (clickedBtn) clickedBtn.classList.add('active');

    // Show only selected section
    document.querySelectorAll('#dynamicContent .section').forEach(sec => {
        sec.style.display = "none";
    });
    document.getElementById(sectionId + "Section").style.display = "block";

    // Update main heading above search bar
    const headingMap = {
        dashboard: "Dashboard",
        tasks: "Tasks",
        settings: "Settings"
    };
    document.getElementById("dynamicHeading").innerHTML =
        `<span class="text-label">${headingMap[sectionId]}</span>`;
}



// Expand/collapse subtasks
function toggleSubTasks(header) {
    const subTasks = header.nextElementSibling;
    subTasks.classList.toggle('visible');
    const arrow = header.querySelector('.arrow');
    if (arrow) {
        arrow.textContent = subTasks.classList.contains('visible') ? '▲' : '▼';
    }
}

function toggleSubMenu(element) {
    const subMenu = element.nextElementSibling;
    const arrow = element.querySelector(".arrow");

    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
        arrow.textContent = "▶"; // collapsed
    } else {
        subMenu.style.display = "block";
        arrow.textContent = "▼"; // expanded
    }
}


// Load Dashboard by default
showSection('tasks');
