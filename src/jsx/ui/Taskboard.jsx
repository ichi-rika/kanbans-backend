'use strict';

import { fetchBoard } from '../app/fetchBoard.js';

export class Taskboard extends React.Component {
    constructor(props) {
        super(props);
        fetchBoard(this, props.boardId);
    }

    render() {
        return (
            <div className="taskboard">
              {this.lists}
            </div>
        );
    }
}