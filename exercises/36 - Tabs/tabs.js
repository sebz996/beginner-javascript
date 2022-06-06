const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    // hide tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    })
    // mark all tabs unselected
    // mark clicked tab as selected
    // find and show associated tab panel

}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
