import {Alert as MuiAlert, AlertProps, Button as MuiButton, ButtonProps, Card as MuiCard, CardContent as MuiCardContent, CardContentProps, CardProps, Grid as MuiGrid, GridProps, Portal as MuiPortal, PortalProps, Table as MuiTable, TableBody as MuiTableBody, TableBodyProps, TableCell as MuiTableCell, TableCellProps, TableHead as MuiTableHead, TableHeadProps, TableProps, TableRow as MuiTableRow, TableRowProps} from '@mui/material';
import {forwardRef} from 'react';

export const Alert       = (props: AlertProps) => <MuiAlert {...props}/>;
export const Button      = (props: ButtonProps) => <MuiButton {...props}/>;
export const Card        = (props: CardProps) => <MuiCard {...props}/>;
export const CardContent = (props: CardContentProps) => <MuiCardContent {...props}/>;
// @ts-ignore
export const Grid        = forwardRef((props: GridProps, ref) => <MuiGrid {...props} ref={ref}/>);
export const Portal      = (props: PortalProps) => <MuiPortal {...props}/>;
export const Table       = (props: TableProps) => <MuiTable {...props}/>;
export const TableBody   = (props: TableBodyProps) => <MuiTableBody {...props}/>;
export const TableCell   = (props: TableCellProps) => <MuiTableCell {...props}/>;
export const TableHead   = (props: TableHeadProps) => <MuiTableHead {...props}/>;
export const TableRow    = (props: TableRowProps) => <MuiTableRow {...props}/>;
