/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import CalHeatmap from 'cal-heatmap';
// @ts-ignore
import Legend from 'cal-heatmap/plugins/Legend';
// @ts-ignore
import Tooltip from 'cal-heatmap/plugins/Tooltip';

// Optionally import the CSS
import 'cal-heatmap/cal-heatmap.css';
const cal = new CalHeatmap();

export default function Basic() {
  // Write your code here.
  const data = [
    { date: '2023-01-01', intensity: 3, score: 30 },
    { date: '2023-01-02', intensity: 6, score: 10 },
    { date: '2023-01-03', intensity: 20, score: 20 },
    { date: '2023-01-04', intensity: 30, score: 40 },
    { date: '2023-01-05', intensity: 40, score: 50 },
    { date: '2023-01-06', intensity: 50, score: 60 },
    { date: '2023-01-07', intensity: 60, score: 70 },
    { date: '2023-01-08', intensity: 70, score: 80 },
  ];
  cal.paint(
    {
      data: { source: data, x: 'date', y: 'score' },
      date: { start: new Date('2023-01-01') },
      range: 6,
      scale: {
        color: {
          type: 'quantize',
          scheme: 'Greens',
          domain: [0, 10, 20, 30, 40, 50, 60, 70],
        },
      },
      domain: {
        type: 'month',
      },
      subDomain: { type: 'day', radius: 2 },
      itemSelector: '#day',
    },
    [
      [
        Tooltip,
        {
          text: function (date, value, dayjsDate) {
            return (
              'score: ' + (value ? value : 0) + '.' + dayjsDate.format('LL')
            );
          },
        },
      ],
      [
        Legend,
        {
          tickSize: 0,
          width: 100,
          itemSelector: '#legend',
          label: 'Questions Solved/day',
        },
      ],
    ]
  );
  return (
    <>
      <div style={{ display: 'inline-block' }}>
        <div id="day"></div>
        <a
          className="button button--sm button--secondary margin-top--sm"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            cal.previous();
          }}
        >
          ← Previous
        </a>
        <a
          className="button button--sm button--secondary margin-left--xs margin-top--sm"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            cal.next();
          }}
        >
          Next →
        </a>
        <div id="legend" style={{ cssFloat: 'right' }}></div>
      </div>
    </>
  );
}
