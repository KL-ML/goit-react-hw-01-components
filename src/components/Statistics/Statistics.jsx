import PropTypes from 'prop-types';
import { Section, Title, List, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {
                title && (
                    <Title>{title}</Title>
                )
            }
            <List>
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
            </List>
        </Section>
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