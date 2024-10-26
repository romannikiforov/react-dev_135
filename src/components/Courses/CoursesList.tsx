import { Component } from 'react';
import Course from '@courses/Course'
import '@courses/courses.scss'
import data from '@courses/data'

export type DataType = {
    id: string;
    date: string;
    title: string;
    anons: string;
}
type CoursesState = {
    openId: string | null;
}


class CoursesList extends Component<object, CoursesState> {
    state = {
        openId: null
    }

    toggle = (id: string | null) => this.setState(({ openId }) => ({
        openId: openId === id ? null : id
    }))


    render() {
        const { openId } = this.state;
        return (
            <> <h1>Courses</h1>
                <div className="courses-list" >
                    {data.map((item: DataType) => <Course key={item.id} item={item}
                        isOpen={openId === item.id}
                        toggle={this.toggle}

                    />)}
                </div>
            </>

        )
    }
}

export default CoursesList