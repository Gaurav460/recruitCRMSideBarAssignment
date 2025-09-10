
const toggleBtn = document.getElementById('toggleBtn');
const rightPanel = document.getElementById('rightPanel');
const arrowIcon = toggleBtn.querySelector('i');

// Toggle expand/collapse

toggleBtn.addEventListener('click', () => {
    rightPanel.classList.toggle('expanded');
    arrowIcon.classList.toggle('fa-chevron-right', !rightPanel.classList.contains('expanded'));
    arrowIcon.classList.toggle('fa-chevron-left', rightPanel.classList.contains('expanded'));
});

// Show only selected section
function showSection(sectionId) {
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
    const arrow = header.querySelector('.arrow');
    if (subTasks.style.display === "block") {
        subTasks.style.display = "none";
        arrow.classList.remove("fa-chevron-up");
        arrow.classList.add("fa-chevron-down");
    } else {
        subTasks.style.display = "block";
        arrow.classList.remove("fa-chevron-down");
        arrow.classList.add("fa-chevron-up");
    }
}

// Get all left-bar icons
const sidebarIcons = document.querySelectorAll(".left-bar span");

// Add click event to each
sidebarIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // Remove active from all
        sidebarIcons.forEach(i => i.classList.remove("active"));
        // Add active to clicked one
        icon.classList.add("active");
    });
});


// Load Dashboard by default
showSection('tasks');
document.querySelector(".left-bar span:nth-child(3)").classList.add("active");
