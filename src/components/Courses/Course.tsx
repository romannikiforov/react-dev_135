import '@courses/courses.scss'
import { memo } from 'react';

import { type DataType } from '@courses/CoursesList'

type CourseProps = {
  item: DataType;
  isOpen: boolean;
  toggle: (id: string | null) => void;
}

const Course = memo(({ item, isOpen, toggle }: CourseProps) => {
  return (
    <div className="course-item">
      <h3>{item.title}</h3>
      <button onClick={() => toggle(item.id)}>{isOpen ? "hide" : 'open'}</button>
      {isOpen && <p>{item.anons}</p>}
    </div>
  );
});


export default Course;
