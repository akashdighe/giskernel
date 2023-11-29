// ChartPage.js

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';
import { useFormData } from '../Componet/FormDataContext';
import './ChartPage.css';

const ChartPage = () => {
    const { formData } = useFormData();

    const barChartData = [
        { label: 'Skill Scale', value: formData.skillScale || 0 },
        { label: 'Skill Level', value: formData.skillLevel ? 1 : 0 },
        { label: 'Last Use ', value: formData.lastUseDate ? 1 : 0 },
        { label: 'Back-end ', value: formData.hasBackendSkill === 'yes' ? 1 : 0 },
    ];

    const barChartConfig = {
        keys: ['value'],
        indexBy: 'label',
        margin: { top: 50, right: 20, bottom: 50, left: 20 }, // Adjusted margins for mobile view
        padding: 0.3,
        colors: { scheme: 'nivo' },
        borderColor: { from: 'color', modifiers: [['darker', 1.6]] },
        axisTop: null,
        axisRight: null,
        axisBottom: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'X Axis Label',
            legendPosition: 'middle',
            legendOffset: 32,
        },
        axisLeft: {
            tickSize: 5,
            tickPadding: 0.1,
            tickRotation: 0,
        },
        labelSkipWidth: 10,
        labelSkipHeight: 12,
        labelTextColor: { from: 'color', modifiers: [['darker', 1.6]] },
        legends: [
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ],
    };

    const lineChartData = [
        {
            id: 'Line Chart',
            data: [
                { x: 'Skill Scale', y: formData.skillScale || 0 },
                { x: 'React Level', y: formData.skillLevel ? 1 : 0 },
                { x: 'Last Use ', y: formData.lastUseDate ? 1 : 0 },
                { x: 'Back-end ', y: formData.hasBackendSkill === 'yes' ? 1 : 0 },
            ],
        },
    ];

    const lineChartConfig = {
        margin: { top: 50, right: 60, bottom: 50, left: 60 },
        xScale: { type: 'point' },
        yScale: { type: 'linear', min: 0, stacked: false, reverse: false },
        curve: 'monotoneX',
        axisTop: null,
        axisRight: null,
        axisBottom: {
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: 32,
        },
        axisLeft: {
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40,
        },
        enableGridX: false,
        enableGridY: true,
        enablePoints: true,
        enableArea: false,
        enableSlices: 'x',
        pointSize: 10,
        pointColor: { theme: 'background' },
        pointBorderWidth: 2,
        pointBorderColor: { from: 'serieColor' },
        pointLabel: 'y',
        pointLabelYOffset: -12,
        useMesh: true,
        legends: [
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ],
    };

    // ... (previous code)

    const pieChartData = [
        { id: 'Skill Scale', label: 'Skill Scale', value: formData.skillScale || 0 },
        { id: 'React Level', label: 'React Level', value: formData.skillLevel ? 1 : 0 },
        { id: 'Last Use ', label: 'Last use', value: formData.lastUseDate ? 1 : 0 },
        { id: 'Back-end ', label: 'Back-end', value: formData.hasBackendSkill === 'yes' ? 1 : 0 },
    ];

    const pieChartConfig = {
        margin: { top: 40, right: 40, bottom: 100, left: 40 },
        padAngle: 0.3,
        cornerRadius: 5,
        colors: { scheme: 'nivo' },
        borderWidth: 1,
        borderColor: { from: 'color', modifiers: [['darker', 0.2]] },
        enableRadialLabels: true,
        radialLabel: d => `${d.id}: ${d.value}`,
        radialLabelsSkipAngle: 10,
        radialLabelsTextXOffset: 6,
        radialLabelsTextColor: '#333',
        radialLabelsLinkDiagonalLength: 16,
        radialLabelsLinkHorizontalLength: 24,
        radialLabelsLinkStrokeWidth: 1,
        radialLabelsLinkColor: { from: 'color' },
        enableSlicesLabels: true, // Enable slice labels
        sliceLabel: d => `${d.label}: ${d.value}`, // Format the slice labels
        legends: [
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                        },
                    },
                ],
            },
        ],
    };

    // ... (rest of the component)



    return (
        <div className="chart-container">
            <div className="chart">
                <h2>Bar Chart</h2>
                <div className="chart-wrapper">
                    <ResponsiveBar data={barChartData} {...barChartConfig} />
                </div>
            </div>

            <div className="chart">
                <h2>Line Chart</h2>
                <div className="chart-wrapper">
                    <ResponsiveLine
                        data={lineChartData}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear' }}
                        {...lineChartConfig}
                    />
                </div>
            </div>

            <div className="chart">
                <h2>Pie Chart</h2>
                <div className="chart-wrapper">
                    <ResponsivePie data={pieChartData}{...pieChartConfig} />
                </div>
            </div>
        </div>
    );
};

export default ChartPage;
