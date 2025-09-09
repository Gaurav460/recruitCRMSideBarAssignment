
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


// Load Dashboard by default
showSection('tasks');
