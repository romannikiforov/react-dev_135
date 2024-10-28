import { Component } from 'react'
import { CoursesProps } from '@courses/CoursesList'

type StateWithToggle = {
    openId: string | null;
}


const withToggle = (BaseComponent: (props: CoursesProps) => React.JSX.Element) => {

    class ToggleClass extends Component<object, StateWithToggle> {
        state = {
            openId: null
        }

        toggle = (id: string | null) => this.setState(({ openId }) => ({
            openId: openId === id ? null : id
        }))

        render() {
            return <BaseComponent
                {...this.state}
                toggle={this.toggle} {...this.props} />
        }


    }

    return ToggleClass;

}

export default withToggle;