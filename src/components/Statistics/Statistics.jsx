import PropTypes from 'prop-types';
import { Title, Item, Label, Percentage } from './Statistics.styled';
import { Box } from 'components/Box';

export const Statistics = ({ title, stats }) => {
    return (
        <Box
            bg="backgroundCard"
            boxShadow="boxShadowSection"
            borderRadius="normal"
            overflow="hidden"
            mb={24}
        >
            {
                title && (
                    <Title>{title}</Title>
                )
            }
            <Box
                display="flex"
                alignItems="center"
                borderRadius="normal"
                backgroundImage="linear-gradient(
                130deg,
                #DE7B7B 20%,
                 #CA68A3 60%,
                #B25CCE
                );"
                as="ul"
            >
                {
                    stats.map(({ id, label, percentage }) => {
                        return (
                            <Item key={id}>
                                <Label>{label}</Label>
                                <Percentage>{percentage}%</Percentage>
                            </Item>
                        )
                    })
                }
            </Box>
        </Box>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};