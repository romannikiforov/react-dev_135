import '@courses/courses.scss'
import { PureComponent } from 'react';

import { type DataType } from '@courses/CoursesList'

type CourseProps = {
  item: DataType;
  isOpen: boolean;
  toggle: (id: string | null) => void;
}

class Course extends PureComponent<CourseProps> {
  render() {
    const { item, isOpen, toggle } = this.props;
    console.log('rerender', item.id)

    return (
      <div className="course-item">
        <h3>{item.title}</h3>
        <button onClick={() => toggle(item.id)}>{isOpen ? "hide" : 'open'}</button>
        {isOpen && <p>{item.anons}</p>}
      </div>
    );
  }
};

export default Course;
