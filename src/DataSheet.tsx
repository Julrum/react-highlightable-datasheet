import React, { useState, useMemo } from 'react';
import produce from 'immer';
import { useTable, useFlexLayout } from 'react-table';

import { DataSheetProps } from './DataSheet.type';
import * as styled from './DataSheet.style';

const DataSheet: React.FC<DataSheetProps> = ({}) => {
  const [count, setCount] = useState(0);
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [start, setStart] = useState<string>('');
  const [coordinate, setCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [selectedPoint, setSelectedPoint] = useState<
    {
      start: string;
      end: string;
    }[]
  >([]);

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    isKeyDown
      ? ((setCount(count + 1),
        setSelectedPoint([
          ...selectedPoint,
          {
            start: event.currentTarget.id,
            end: event.currentTarget.id,
          },
        ])),
        setStart(event.currentTarget.id))
      : (setSelectedPoint([
          {
            start: event.currentTarget.id,
            end: event.currentTarget.id,
          },
        ]),
        setStart(event.currentTarget.id),
        setCount(0));
    setIsMouseDown(true);
  };

  const Table = ({ columns, data }: any) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
      },
      useFlexLayout,
    );

    return (
      <>
        <styled.table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.slice(0, 10).map((row, i: number) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, i: number) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </styled.table>
      </>
    );
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    [],
  );

  const data: any[] = [];
  return <Table columns={columns} data={data} />;
};

export default DataSheet;
