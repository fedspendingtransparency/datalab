import React from 'react';

const BpToc = () => (
  <>
    <ul className="toc">
        <li><a href="#revenue-chapter" className="toc__link scroll-to toc__revenue"><span className="toc__chapter-number">01</span> Federal Revenue</a></li>
        <li><a href="#spending-chapter" className="toc__link scroll-to toc__spending"><span className="toc__chapter-number">02</span> Federal Spending</a></li>
        <li><a href="#deficit-chapter" className="toc__link scroll-to toc__deficit"><span className="toc__chapter-number">03</span> Federal Deficit</a></li>
        <li><a href="#debt-chapter" className="toc__link scroll-to toc__debt"><span className="toc__chapter-number">04</span> Federal Debt</a></li>
    </ul>
  </>
)

export default BpToc;
