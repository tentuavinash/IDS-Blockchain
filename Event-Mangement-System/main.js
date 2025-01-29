// script.js
document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const startTime = new Date(document.getElementById('startTime').value);
    const endTime = new Date(document.getElementById('endTime').value);
    const description = document.getElementById('description').value;

    if (startTime >= endTime) {
        alert('End time must be after start time.');
        return;
    }

    const newEvent = { startTime, endTime, description };
    const conflict = checkConflict(newEvent);

    if (conflict) {
        alert(`Conflict with event: ${conflict.description}`);
        suggestAlternative(newEvent);
    } else {
        addEvent(newEvent);
    }
});

const events = [];

function checkConflict(newEvent) {
    for (const event of events) {
        if (
            (event.startTime <= newEvent.startTime && newEvent.startTime < event.endTime) ||
            (event.startTime < newEvent.endTime && newEvent.endTime <= event.endTime) ||
            (newEvent.startTime <= event.startTime && newEvent.endTime >= event.endTime)
        ) {
            return event;
        }
    }
    return null;
}

function addEvent(event) {
    events.push(event);
    displayEvents();
}

function displayEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    for (const event of events) {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.description}: ${event.startTime.toLocaleString()} - ${event.endTime.toLocaleString()}`;
        eventList.appendChild(listItem);
    }
}

function suggestAlternative(newEvent) {
    alert('This is a simple example and does not suggest alternative slots. Implementing this would require more complex logic.');
}
