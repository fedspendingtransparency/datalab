import React, { Component, useEffect } from 'react';
import { select, selectAll } from 'd3-selection';

export default function Tabs(props) {

  useEffect(() => {
    /**
     * The following accordion variables are dependent on the setup currently used by assets/ffg/accordion.js. If the
     * dom and/or class structure changes there, then it will affect the variables below.
     */
    const d3 = { select, selectAll },
          accordionTagName = 'SECTION',
          accordionClickClass = 'accordion__heading',
          accordionOpenClass = 'accordion--open',
          tabContainerClass = 'cg-tabs__container',
          singleTabClass = 'cg-tabs__tab';

    /**
     * Attaches click events on the tab elements to handle showing and hiding content, styling the active tab, and
     * capturing the selected tab.
     * @param container {Object} - The dom object for where the tab container will be placed.
     * @param config {Object} - The config object for the names of the tabs and the selector inside the container
     *    for the tab component to give the selected content an 'active' class.
     */
    function addTabEvents(container, config){
      const tabEls = container.selectAll('.' + singleTabClass);

      let curTab,
          curSelectedTabIdx = 0;

      tabEls.on('click', function(){
        // Inactivate all tab elements
        tabEls.classed('active', false);
        // Inactive (hide) all tab content
        container.select('.active').classed('active', false);

        curTab = d3.select(this);
        // Set the selected tab element to active
        curTab.classed('active', true);
        // Set the selected tab content to active (to display it)
        container.select(curTab.attr('tabSelector')).classed('active', true);
        // Capture the index of the currently selected tab
        config.selectedTabIdx = curTab.attr('tabIdx');
      });

      // Open up the tab that the user previously had open before collapsing the toggle.
      curSelectedTabIdx = config.selectedTabIdx || 0;
      tabEls._groups[0][curSelectedTabIdx].click();
    }

    /**
     * When we add the tabs to the container, we create the tab container (for showing all of the tabs across the t0op) as
     * the first child element of the parent container. From there, we add all of the desired tabs into the newly created
     * tab container. The tabs are buttons which allows the user to access them by using the keyboard.
     *
     * Each tab is given a tabIdx property so we can create the user experience of always having previously selected tab open
     * when the tabs are deleted and re-created. Each tab also has a tabSelector property so we can access that tab's content,
     * which is provided to us by the _tabs parameter on initTabs.
     *
     * @param container {Object} - The dom object for where the tab container will be placed.
     * @param config {Object} - The config object for the names of the tabs and the selector inside the container
     *    for the tab component to give the selected content an 'active' class.
     */
    function addTabs(container, config){
      const tabContainer = container.insert('div', ':first-child');

      let curTab;

      tabContainer.classed(tabContainerClass, true);

      for(let i = 0, il = config.tabs.length; i < il; i++){
        curTab = config.tabs[i];
        tabContainer.append('button').classed(singleTabClass, true).attr('tabSelector', curTab.selector).attr('tabIdx', i).append('div').text(curTab.name);
      }
    }

    /**
     * If the tabs are embedded in an accordion component, we will remove the tabs from the dom upon collapsing the accordion.
     * Likewise, when the accordion is opened, we'll create the tabs but give a fluid user experience so it appears that the
     * tabs never went anywhere and were just hidden.
     *
     * NOTE - One of the greatest purposes of removing the dom elements is that there is no way at this time (by using pure css)
     * to disable tabbing into content, especially if the content is not visible to the user. There exists a tab-index property,
     * but that's applied directly in the html and would have to be manipulated by javascript. In choosing between tab-index
     * and dom removal, I went with copying what is in place on USASpending.
     *
     * @param container {Object} - The dom object for where the tab container will be placed.
     */
    function removeTabs(container){
      const tabContainer = container.select(`.${tabContainerClass}`);
      tabContainer.remove();
    }

    function inactiveContent(container){
      container.selectAll('.active').classed('active', false);
    }

    /**
     * Find the accordion toggle (if our tab content exists inside an accordion). We'll travel up through the parent elements
     * until we find the "SECTION" node. When we find the section node, we'll look inside to find the accordion toggle element,
     * which is currently set on the H1 element with the classname seen in accordionClickClass at the top of this file.
     *
     * @param container {Object} - The dom object for where the tab container will be placed.
     */
    function findAccordionToggle(container){
      let accordionToggle = container.node().parentNode;
      while(accordionToggle && accordionToggle.nodeName !== accordionTagName){
        accordionToggle = accordionToggle.parentNode;
      }

      if(accordionToggle){
        accordionToggle = d3.select(accordionToggle).select(`.${accordionClickClass}`).node();
      }

      return accordionToggle;
    }

    /**
     * Attach an event listener to the accordion toggle "click" action. When the toggle is expanded, we'll call the
     * addTabs and addTabEvents functions to put the tabs into the dom. When the toggle is collapsed, we'll call removeTabs.
     *
     * @param accordionToggle {Object} - The accordion toggle object where we'll listen for the click event to add/remove our tabs from the dom.
     * @param container {Object} - The dom object for where the tab container will be placed.
     * @param config {Object} - The config object for the names of the tabs and the selector inside the container
     *    for the tab component to give the selected content an 'active' class.
     */
    function addAccordionToggleEvent(accordionToggle, container, config){
      if(accordionToggle.parentNode.className.match(accordionOpenClass)) {
        addTabs(container, config);
        addTabEvents(container, config);
      }

      // In keeping with consistency of USASpending accordions and tabs, we'll delete the content when closing the accordion and create the content when opening the accordion.
      accordionToggle.addEventListener('click', function(){
        if(this.parentNode.className.match(accordionOpenClass)){
          addTabs(container, config);
          addTabEvents(container, config);
        } else {
          removeTabs(container);
          inactiveContent(container);
        }
      });
    }

    /**
     * The exported function for initializing the tabs container and calling the appropriate functions to capture
     * events (if inside an accordion) and to create the tabs and tab events.
     *
     * @param _container {Object} - The dom object for where the tab container will be placed.
     * @param _config {Object} - The config object for the names of the tabs and the selector inside the container
     *    for the tab component to give the selected content an 'active' class.
     */
    function initTabs(_container, _config){
      const container = d3.select(_container),
            config = _config,
            tabs = config.tabs;

      if(container && tabs && tabs.length){
        const accordionToggle = findAccordionToggle(container, config);

        if(accordionToggle){
          addAccordionToggleEvent(accordionToggle, container, config);
        } else {
          addTabs(container, config);
          addTabEvents(container, config);
        }
      }
    }

    initTabs(props.tabContainer, props.config); // final call
  });

  return (
    <>
    </>
  );
};



