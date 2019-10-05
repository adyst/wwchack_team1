import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import '../../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    VerticalBarSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis
} from 'react-vis';

const Chart = () => {
    const data = [{
            x: 0,
            y: 8
        },
        {
            x: 1,
            y: 5
        },
        {
            x: 2,
            y: 4
        },
        {
            x: 3,
            y: 9
        },
        {
            x: 4,
            y: 1
        },
        {
            x: 5,
            y: 7
        },
        {
            x: 6,
            y: 6
        },
        {
            x: 7,
            y: 3
        },
        {
            x: 8,
            y: 2
        },
        {
            x: 9,
            y: 0
        }
    ];

    return (
        <Card>
            <CardContent>
               <XYPlot height={300} width={300}>
                    <XAxis />
                    <YAxis / >
                    <VerticalGridLines />
                    <HorizontalGridLines / >
                   <VerticalBarSeries data={data} />
               </XYPlot>
            </CardContent>
        </Card>
    )
};

export default Chart;