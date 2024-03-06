import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';


const data = [
  { value:80,  label: 'Crowdsale Investors :80%' },
  { value: 20, label: 'Foundation:20%' },
  
];

const size = {

  width: 600,
  height: 200,
};






export default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 70 }]} {...size}
    colors={['#0083fe', '#fba101']} 
    >
       
    </PieChart>
  );
}
