import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductChart = ({ products }) => {
  const ratingScaleFactor = 10;

  const data = {
    labels: products.map(product => product.product_title),
    datasets: [
      {
        label: 'Rating',
        data: products.map(product => product.rating * ratingScaleFactor),
        backgroundColor: 'rgba(149, 56, 226, 0.1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Price',
        data: products.map(product => product.price),
        backgroundColor: '#9538E2',
        borderColor: 'rgba(149, 56, 226, 0.1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Ratings and Prices',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value / ratingScaleFactor;
          }
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

ProductChart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product_title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductChart;