import React, { useState } from 'react';
// import produce from 'immer';

import { SpreadSheetProps } from './SpreadSheet.type';

const SpreadSheet: React.FC<SpreadSheetProps> = ({}) => {
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

  return <div>hello</div>;
};

export default SpreadSheet;
