import React from 'react';


export default function Bar(props) {
  console.log(props);

  const connector = {
    startingPointer: 35,
    endPointer: 10,
    lineWidth: 2
  }

  const arr = [1, 2, 3, 4, 5, 6, 7];

  return (<>
    {arr.map(function(i) {
      return(<div key={i}>
        <svg width='100%' height='65px'>
          <g className='connectors'>
            <rect fill='red' x='50%' y='0' width={connector.lineWidth} height={connector.startingPointer}></rect>
            <rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>
            <rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>
            <text fill='black' x='57%' y='60' fontSize='14px'>Obligated</text>
          </g>
          <g  className='bar'>
            <rect fill='#ccc' width='100%' height='25'></rect>
            <rect fill='#0074d9' width='45%' height='25'></rect>
          </g>
        </svg>
      </div>);
    })}
  </>)
}

export const IndexQuery = graphql`
  query {
    allSankeyV1Fy19Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyPanelV1Fy19Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyTitlesV1Fy19Csv {
      nodes {
        name
        value
      }
    },
    allSankeyV1Fy18Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyPanelV1Fy18Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyTitlesV1Fy18Csv {
      nodes {
        name
        value
      }
    },
    allSankeyFy17Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyPanelFy17Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyTitlesFy17Csv {
      nodes {
        name
        value
      }
    },
     allDescriptionsCsv {
      nodes {
        name
        desc
      }
    }
  }
`