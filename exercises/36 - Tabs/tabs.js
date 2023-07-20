const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = tabs.querySelectorAll("[role='tabpanel']");

function handleTabClick(event) {
    // when someone clicks on tab, hide all other tab panels
    tabPanels.forEach(function(panel) {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabs.forEach(tab => {
        tab.hidden = true;
    })
    // mark the clicked tab as selected
    // find the associated tab panel and show it 

};
 
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));