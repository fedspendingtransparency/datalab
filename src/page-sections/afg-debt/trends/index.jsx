import React, { useEffect } from 'react';
import { select, selectAll } from 'd3-selection';

export default function DebtTrends() {
    useEffect(() => {
        const d3 = { select, selectAll },
          control = d3.select('.toggle-component'),
          debtImage = d3.select('#debt-image'),
          gdpImage = d3.select('#gdp-image'),
          activeClass = 'trend-chart-container__image--active';

        let currentlyActive = debtImage.classed(activeClass) ? debtImage : gdpImage;

        function setActiveDataAttribute() {
            control.attr('data-active', currentlyActive.attr('id'));
        }

        function toggle(force) {
            currentlyActive.classed(activeClass, false);

            if (force) {
                currentlyActive = force;
            } else if (currentlyActive.attr('id') === 'debt-image') {
                currentlyActive = gdpImage;
            } else {
                currentlyActive = debtImage;
            }

            setActiveDataAttribute();

            currentlyActive.classed(activeClass, true);
        }

        function onLabelClick() {
            const label = d3.select(this),
              targetId = label.attr('data-target'),
              target = d3.select('#' + targetId);

            toggle(target);
        }

        d3.select('#toggle-image').on('click', function(){
            toggle();
        });

        d3.selectAll('.toggle-component__label').on('click', onLabelClick);

        setActiveDataAttribute();
    }, []);

    return(<>
        <div className="toggle-component toggle-component--debt clearfix">
            <span className="toggle-component__label" data-target="debt-image">Debt</span>
            <button id="toggle-image" className="toggle-control" aria-label="Toggle image">
                <div className="toggle-control__background">
                    <div className="toggle-control__dot"></div>
                </div>
            </button>
            <span className="toggle-component__label" data-target="gdp-image">Debt to GDP</span>
        </div>
    </>)

}
