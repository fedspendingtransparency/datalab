import glossaryData from './glossary_2020.csv';
import React, {useEffect} from 'react';
import * as d3 from 'd3v4';
import styles from '../headers/page.module.scss';
import './glossary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default function Glossary() {

  useEffect(() => {

    let origCategorizedTerms = [], filteredData, termSelected;

    let glossaryWrapper, glossaryLaunchedEl;

    function categorizeGlossaryData(data) {
      const categorizedData = [];
      let hashChar = '';

      data.forEach(function(d) {
        if (!d.term) return;

        hashChar = d.term.substring(0, 1);
        if (!categorizedData[hashChar]) {
          categorizedData[hashChar] = [];
        }
        return categorizedData[hashChar].push(d);
      });

      return categorizedData;
    }

    function createSVGElements() {
      const closeButton = d3.select('#cg-glossary-close-button'),
            searchBox = d3.select('#cg-search-button'),
            backButton = d3.select('.cg-glossary-back__content');

      // Remove the svg tags if they exist for each icon.
      closeButton.select('svg').remove();
      searchBox.select('svg').remove();
      backButton.select('svg').remove();

      // Add the svg tags for each icon.
      const closeButtonSvg = closeButton.append('svg')
            .classed('cg-icon-close', true)
            .attr('viewBox', '0 0 512 512')
            .attr('aria-label', 'Close Glossary 123'),
            searchBoxSvg = searchBox.append('svg')
            .classed('cg-icon-search', true)
            .attr('viewBox', '0 0 512 512')
            .attr('aria-label', 'search'),
            backButtonSvg = backButton.append('svg').classed('cg-glossary-angle-left', true)
            .attr('viewBox', '0 0 512 512')
            .attr('aria-label', 'Back');

      //The following code appends the correct elements to the dom and adds the attributes to draw the "X" symbol for the close button.
      closeButtonSvg.append('title')
        .text('Close Glossary');
      closeButtonSvg.append('g').append('path')
        .attr('d', 'M256 212L50 6 6 50l206 206L6 462l44 44 206-206 206 206 44-44-206-206L506 50 462 6');

      //The following code appends the correct elements to the dom and adds the attributes to draw the magnifying glass symbol for the search icon.
      searchBoxSvg.append('title')
        .text('Search');
      searchBoxSvg.append('g').append('path')
        .attr('d', 'M337.8 208.3c0-36.5-12-66.8-37.4-92-25.3-25.4-55.7-37.6-92-37.6-35.5 0-66 12.2-91.2 37.5-25.3 25.3-38.5 55.6-38.5 92 0 35.5 13.2 66 38.5 91.2 25.3 25.3 55.7 38.4 91 38.4 36.5 0 67-13 92.2-38.4 25.3-25.3 37.4-55.7 37.4-91zM453.5 506L327 379.5c-34.6 24.4-73.3 36.7-116 36.7-27.6 0-54-5-79.6-16.3-25.5-12-47-26-65.3-44-18-19-32-40-43-66-11-25-17-52-17-79 0-29 6-55 16.8-80C33.8 106 48 83.2 66 65c18.6-18.3 40-32.6 65.5-44 25.5-9.8 52-15 79.5-15 28.4 0 55 5 80.4 15.3 24.5 11.2 47 25.5 65.3 44 18.3 18.2 32.6 40.7 43.8 66.2 10.2 24.5 16.3 51 16.3 79.6 0 43-12.2 82-36.7 117l126 126-52 53z');

      //The following code appends the correct elements to the dom and adds the attributes to draw the "<" symbol for the back button.
      backButtonSvg.append('title')
        .text('Back');
      backButtonSvg.append('g').append('path')
        .attr('d', 'M368.5 77.2L208 255l160.2 179.7.4 71.3-225.2-250.5L368 6');
    }

    function createTermHTMLElements(terms, searchTerm) {
      const termListDiv = d3.select('#cg-glossary-term-list-div'),
            termResultList = termListDiv.select('.cg-glossary-search-results');

      termResultList.html(null);

      let filteredTerms = {},
          hashSection = null,
          hashTitle,
          hashDivider,
          groupItems,
          termGroup;

      if (searchTerm) {
        filteredTerms = filteredData.filter(function(t) {
          const upperCaseSearchTerm = searchTerm.toUpperCase();
          return t.term.toUpperCase().match(upperCaseSearchTerm);
        });
        filteredTerms = categorizeGlossaryData(filteredTerms);
      } else {
        filteredTerms = origCategorizedTerms;
      }

      Object.keys(filteredTerms).forEach(function(t) {
        termGroup = filteredTerms[t];

        hashTitle = <h2 className="cg-group-title">${t}</h2>;

        hashDivider = <hr className="cg-group-divider"/>;

        groupItems = <ul className="cg-group-items"/>;

        hashSection = termResultList.append("div").classed('cg-glossary-result-group', true);
        hashSection.append('h2').classed('cg-group-title', true).html(t);
        hashSection.append('hr').classed('cg-group-divider', true);

        groupItems = hashSection.append('ul').classed('cg-group-items', true);

        termGroup.forEach(function(t1) {
          groupItems.append('li').append('button')
            .classed('cg-glossary-link', true)
            .attr('hashMap', t)
            .html(t1.term);
        })
      });
      addGlossaryEvents();
    }

    function showIndividualTerm(termsArr, termDisplay) {
      const definitionWrapperId = '#cg-definition-wrapper',
            definitionWrapper = d3.select(definitionWrapperId),
            showListResultsInd = false;

      let term = {};

      if (termsArr && termDisplay) {
        /*
         * It may seem like a fragile idea to use the term display to perform the filter considering the csv has ids.
         * The problem is that if a term is added/removed to the glossary.csv, this will change the ids on all of the terms
         * following the term that changed. When we have the ability to click on text in the document to launch the glossary and view
         * that term, that means the ids need to be placed on all of the actionable text in the document AND that any updates to the
         * glossary means updating the ids on all actionable text pieces throughout CG (an absolute nightmare).
         */
        term = termsArr.filter(function(d) {
          return d.term.toUpperCase() === termDisplay.toUpperCase();
        });
        if (!term.length) {
          return;
        }
        term = term[0];
      }

      definitionWrapper.html(null);
      definitionWrapper.append('h2')
        .classed('cg-glossary-term', true)
        .html(term.term);

      const definition = term.definition;
      if (definition.match('• ')) {
        let definitionParts = definition.split('• ');
        const paragraphDefinition = definitionParts.shift();

        definitionWrapper.append('div')
          .classed('cg-definition-content')
          .append('p')
          .html(paragraphDefinition);

        const wrapperUl = definitionWrapper.append('ul');
        wrapperUl.append('li').html(definitionParts.join('</li><li>'));

      } else {
        definitionWrapper.append('div')
          .classed('cg-definition-content', true)
          .append('p')
          .html(term.definition);
      }

      if (term.url_path) {
        const wrapperDiv = definitionWrapper.append('div').classed('cg-glossary-resources', true);

        wrapperDiv.append('h3')
          .classed('cg-glossary-resources-title', true)
          .html('More Resources');

        wrapperDiv.append('hr');
        wrapperDiv.append('div')
          .append('p')
          .classed('cg-glossary-resources-text', true)
          .html('Learn More: ')
          .append('a')
          .attr('id', 'cgGlossaryResourcesLink')
          .attr('href', term.url_path)
          .attr('target', '_blank')
          .attr('rel', 'noopener noreferrer')
          .html(term.url_display);
      }
      setTermListView(showListResultsInd);
    }

    function setActiveStatus(glossaryWrapper, activeInd) {
      const openClass = 'active';

      if (activeInd) {
        glossaryWrapper.classed(openClass, true);
      } else {
        glossaryWrapper.classed(openClass, null);
      }
    }

    function setTermListView(showListResultsInd) {
      const searchResultsClass = '.cg-glossary-search-results',
            glossaryDefinitionClass = '.cg-glossary-definition',
            searchResultsDiv = d3.select(searchResultsClass),
            glossaryDefinitionDiv = d3.select(glossaryDefinitionClass)

      if (showListResultsInd) {
        termSelected = false;
        searchResultsDiv.classed('hidden', null);
        glossaryDefinitionDiv.classed('hidden', true);
      } else {
        termSelected = true;
        searchResultsDiv.classed('hidden', true);
        glossaryDefinitionDiv.classed('hidden', null);
      }
    }

    function resizeTermListDiv() {
      const termListDiv = d3.select('#cg-glossary-term-list-div');
      if (!termListDiv.empty()) {
        // Most (if not all) CG pages have a window event which refreshes the screen, so since we only create the SVG elements
        // on init, we must also create them on resize.
        createSVGElements();
        const parentDiv = termListDiv.node().parentElement,
              siblingDiv = parentDiv.getElementsByClassName('cg-glossary-header-wrapper')[0];

        termListDiv.style('height', (parentDiv.clientHeight - siblingDiv.clientHeight) + 'px');
      }
    }

    function showGlossary() {
      const activeInd = true,
            onOpenInd = true,
            showListResultsInd = true;

      if (d3.event && d3.event.target) {
        glossaryLaunchedEl = d3.select(d3.event.target);
      } else {
        glossaryLaunchedEl = document.activeElement;
      }

      setActiveStatus(glossaryWrapper, activeInd);
      setTermListView(showListResultsInd);

      setDocumentFocus(onOpenInd);
    }

    function setDocumentFocus(onOpenInd) {
      let elementToSetFocus = glossaryLaunchedEl,
          timeoutTime = 0;

      if (onOpenInd) {
        elementToSetFocus = document.getElementById('cg-glossary-close-button');
        timeoutTime = 500;
      }

      if (!elementToSetFocus) {
        return;
      }

      setTimeout(function() {
        if(elementToSetFocus) {
          if(elementToSetFocus.focus){
            elementToSetFocus.focus();
          } else {
            let elementNode;
            if(elementToSetFocus.node && (elementNode = elementToSetFocus.node())){
              elementNode.focus();
            }
          }
        }
      }, timeoutTime);
    }

    function addGlossaryEvents() {
      const searchForm = d3.select('.cg-glossary-search-bar form'),
            searchTextBox = d3.select('#cg-search-text-box'),
            actionableTextEntries = d3.select('.cg-glossary-actionable-text'),
            terms = origCategorizedTerms;

      let debounce, previousHeight, previousSearchStr, glossaryButtonHiddenInd = true;

      function searchBoxEvent(event) {

        if (debounce) {
          clearTimeout(debounce);
        }

        const enterKey = 'Enter';
        let searchStr, keyCode;

        if(d3.event && d3.event.target){
          searchStr = d3.event.target.value;
          keyCode = d3.event.key;
        } else {
          searchStr = d3.select(this).attr('value');
        }

        const showListResultsInd = true;

        if (previousSearchStr === searchStr) {
          return;
        }

        debounce = setTimeout(function() {
          if (termSelected && keyCode !== enterKey) {
            return;
          }
          createTermHTMLElements(null, searchStr);
          setTermListView(showListResultsInd);
        }, 400);
      }

      // The following button will exist in the Datalab header
      d3.selectAll('.' + styles.glossary).on('click', function(d,i){
        showGlossary();
      });
      // The following button exists at the bottom-right of the screen when the user scrolls down the page
      d3.select('#afg-floating-glossary-button').on('click', showGlossary);

      glossaryWrapper.select('#cg-glossary-close-button').on('click', function() {
        const activeInd = false;
        setActiveStatus(glossaryWrapper, activeInd);
        setDocumentFocus();
        glossaryLaunchedEl = null;
      });
      glossaryWrapper.selectAll('.cg-glossary-link').on('click', function(el) {
        const curElement = d3.event.target,
              termsArr = terms[curElement.getAttribute('hashMap')],
              termDisplay = curElement.innerText;

        glossaryLaunchedEl = d3.select(curElement);

        showIndividualTerm(termsArr, termDisplay);
      });
      d3.select('.cg-glossary-back').on('click', function() {
        const showListResultsInd = true;
        setTermListView(showListResultsInd);
      });
      searchTextBox.on("propertychange", searchBoxEvent)
        .on('change', searchBoxEvent)
        .on('click', searchBoxEvent)
        .on('keyup', searchBoxEvent)
        .on('input', searchBoxEvent)
        .on('paste', searchBoxEvent);
      searchForm.on('submit', function(e) {
        const searchStr = searchTextBox.val();
        const showListResultsInd = true;
        createTermHTMLElements(null, searchStr);
        setTermListView(showListResultsInd);

      });
      actionableTextEntries.on('click', function() {
        const glossaryTerm = d3.select(this).attr('glossaryTerm'),
              activeInd = true;

        setActiveStatus(glossaryWrapper, activeInd);

        if (glossaryTerm) {
          showIndividualTerm(filteredData, glossaryTerm);
        }

      });
      window.addEventListener('resize', function(e) {
        if (debounce) {
          clearTimeout(debounce);
        }

        if (previousHeight === window.innerHeight) {
          return;
        }
        previousHeight = window.innerWidth;
        debounce = setTimeout(resizeTermListDiv, 100);
      });
      window.addEventListener('scroll', function(e) {
        const scrollPos = document.documentElement.scrollTop,
              glossaryButton = d3.select('#afg-launch-glossary-div');

        let glossaryButtonHiddenInd = glossaryButton.classed('hidden');
        if (scrollPos === 0) {
          if (glossaryButtonHiddenInd === false) {
            glossaryButton.classed('hidden', true);
          }
        } else if (glossaryButtonHiddenInd === true) {
          glossaryButton.classed('hidden', false);
        }
      });
      setTimeout(function() {
        resizeTermListDiv();
      }, 0);
    }

    function init() {
      glossaryWrapper = d3.select('#cg-glossary-wrapper');

      filteredData = glossaryData.filter(r => r.term); //remove blank rows

      origCategorizedTerms = categorizeGlossaryData(filteredData);

      createTermHTMLElements(origCategorizedTerms);
      createSVGElements();
      addGlossaryEvents();

      if (window.location.search.indexOf('glossary') !== -1) {
        showGlossary();

        const urlParams = new URLSearchParams(window.location.search);
        let glossaryTerm = urlParams.get('glossary');
        if (glossaryTerm) {
          glossaryTerm = glossaryTerm.replace('_', ' ');
          showIndividualTerm(filteredData, glossaryTerm);
        }
      }

    }

    init();
  }, glossaryData)

  return (
    <>
      <div id="afg-launch-glossary-div" className="hidden">
        <button id="afg-floating-glossary-button">
          <div className="button-content">
            <FontAwesomeIcon icon={faBook} className="floating-glossary-icon"/>Glossary
          </div>
        </button>
      </div>
      <div id="cg-glossary-wrapper">
        <aside className="cg-glossary-sidebar" role="dialog" aria-labelledby="glossary-title">
          <div className="cg-glossary-header-wrapper">
            <div className="cg-glossary-header">
              <div role="navigation" aria-label="Glossary navigation">
                <button className="cg-close-button" id="cg-glossary-close-button"
                        aria-label="Close Glossary" title="Close Glossary"/>
              </div>
              <h1 id="cg-glossary-title" className="cg-glossary-title" tabIndex="-1">Glossary</h1>
              <div className="cg-glossary-search-bar">
                <input id="cg-search-text-box" type="text" className="search-field"
                       placeholder="Search for a term..."/>
                <button id="cg-search-button" aria-label="Search"
                        className="cg-search-button"/>
              </div>
            </div>
          </div>
          <div id="cg-glossary-term-list-div">
            <div className="cg-glossary-term-list-div__wrapper">
              <div className="cg-glossary-search-results"/>
              <div className="cg-glossary-definition hidden">
                <div id="cg-definition-wrapper"/>
                <button className="cg-glossary-back">
                  <div className="cg-glossary-back__content">
                    <div className="cg-glossary-back-button-label">Back</div>
                  </div>
                </button>
              </div>
              <div className="cg-glossary-scrollbar-track">
                <div className="cg-glossary-scrollbar-thumb"/>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
};

