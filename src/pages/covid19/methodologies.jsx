import React from 'react';
import HWCTA from '../../components/hwcta/hwcta';

const C19HWTCA = ({ location }) => {
    const title = 'COVID-19';

    const dataSources = [{
        content: (
            <p>
                Data sources placeholder text
            </p>
        )
    }];
    const methodologies = [{
        content: (
            <>
                <p>
                    Methodologies placeholder text 1
                </p>
                <p>
                    Methodologies placeholder text 2
                </p>
            </>
        )
    }];

    const notes = [{
        content: (
            <p>
                Notes placeholder text
            </p>
        )
    }];

    return (
        <HWCTA
            location={location}
            title={title}
            dataSources={dataSources}
            methodologies={methodologies}
            notes={notes} />
    );
}
 
export default C19HWTCA;