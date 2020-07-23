import React from 'react';

type Props = {
    color: string;
    note: string;
}

const Note: React.FC<Props> = ({color, note}) => (
    <div>Note</div>
);

export default Note;