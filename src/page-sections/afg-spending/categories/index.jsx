import React, { useEffect } from 'react';
import { init, initChart } from './init';

export default function SpendingCategories() {

  useEffect(() => {
    let debounce;

    init();

    window.addEventListener('resize', function () {
      if (debounce) {
        clearTimeout(debounce);
      }

      debounce = setTimeout(initChart, 100);
    });
  })

  return <div id="viz"></div>;
}

