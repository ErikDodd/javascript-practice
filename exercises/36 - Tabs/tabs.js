const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

function handleTabClick(event) {
    // when someone clicks on tab, hide all other tab panels
    tabPanels.forEach(function(panel) {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach(tabButton => {
        // tabButton.ariaSelected =  false;
        tabButton.setAttribute('aria-selected', false);
    })
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true)
    // find the associated tab panel and show it 
    const { id } = event.currentTarget;
    const tabPanel = tabs.querySelector(`[aria-labeledby="${id}"]`);
    tabPanel.hidden = false;


};
 
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));