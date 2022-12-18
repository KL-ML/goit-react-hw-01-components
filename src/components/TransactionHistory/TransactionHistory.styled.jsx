import styled from "@emotion/styled";

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

export const Thead = styled.thead`
    height: ${p => p.theme.sizes.tableHeadHeight};
    color: ${p => p.theme.colors.accent};
`;

export const TableTH = styled.th`
    
`;

export const Tbody = styled.tbody`
    text-align: center;
    
`;

export const TableTD = styled.td`
    padding: 4px;
    border-top: ${p => p.theme.borders. normal} ${p => p.theme.colors.background};

`;
