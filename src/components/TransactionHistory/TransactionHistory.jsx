import PropTypes from 'prop-types';
import {
  TransactionTablle,
  Head,
  HeadCell,
  Body,
  BodyRow,
  BodyCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTablle>
      <Head>
        <tr>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </tr>
      </Head>

      <Body>
        {items.map(item => (
          <BodyRow key={item.id}>
            <BodyCell>{item.type}</BodyCell>
            <BodyCell>{item.amount}</BodyCell>
            <BodyCell>{item.currency}</BodyCell>
          </BodyRow>
        ))}
      </Body>
    </TransactionTablle>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
