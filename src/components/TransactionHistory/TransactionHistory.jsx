import PropTypes from 'prop-types';
import { Table, Thead, Tbody, TableTD } from './TransactionHistory.styled';
import { Box } from 'components/Box';

export const TransactionHistory = ({ items }) => {
    return (
        <Box
            bg="backgroundCard"
            boxShadow="boxShadowSection"
            borderRadius="normal"
            overflow="hidden" 
        >
            <Table>
                <Thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </Thead>

                <Tbody>
                    {
                        items.map(({ id, type, amount, currency }) => {
                            return (
                                <tr key={id}>
                                    <TableTD>{type}</TableTD>
                                    <TableTD>{amount}</TableTD>
                                    <TableTD>{currency}</TableTD>
                                </tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </Box>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};