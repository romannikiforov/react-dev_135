import withToggle from '@/hoc/withToggle'
import Course from '@courses/Course'
import '@courses/courses.scss'
import data from '@courses/data'

export type DataType = {
    id: string;
    date: string;
    title: string;
    anons: string;
}

export type CoursesProps = {
    openId: string | null;
    toggle: (id: string | null) => void;
}


const CoursesList = withToggle(({ toggle, openId }: CoursesProps) => {
    return (
        <> <h1>Courses</h1>
            <div className="courses-list" >
                {data.map((item: DataType) => <Course key={item.id} item={item}
                    isOpen={openId === item.id}
                    toggle={toggle}

                />)}
            </div>
        </>

    )
})


export default CoursesList