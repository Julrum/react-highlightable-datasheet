import React, { useState } from 'react';
import produce from 'immer';

import { DataSheetProps } from './DataSheet.type';

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

  return <div>excel</div>;
};

export default DataSheet;
