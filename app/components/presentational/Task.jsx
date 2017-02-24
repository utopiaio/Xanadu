import React, { PropTypes } from 'react';
import moment from 'moment';

import haversine from 'App/util/haversine.js';

import { TaskItem, TaskItemInfo, TaskItemAction } from 'App/components/styled/Task.jsx';

function Task({ task, toggle, location, edit }) {
  const distance = Math.ceil(haversine(location, task.coordinate));

  return (
    <TaskItem onClick={() => toggle(task.id)}>
      <TaskItemAction
        className={task.done ? 'icon-circle-check' : 'icon-record'}
        done={task.done}
      />

      <TaskItemInfo>
        <span style={{ fontSize: '1.25em', paddingBottom: '0.2em' }}>{task.task}</span>
        <small style={{ color: '#6E685C', paddingBottom: '0.4em' }}>{`${distance.toLocaleString('us')} Meter${distance > 1 ? 's' : ''}`}</small>
        <small style={{ color: '#95a5a6' }}><span>{`${moment(task.time).format('YYYY-MM-DD hh:mm A')} `}</span><i>{`(${moment(task.time).fromNow()})`}</i></small>
      </TaskItemInfo>

      <TaskItemAction
        onClick={(e) => { e.stopPropagation(); edit(task.id); }}
        className="icon-ellipsis"
      />
    </TaskItem>
  );
}

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  toggle: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  location: PropTypes.shape().isRequired,
};

module.exports = Task;