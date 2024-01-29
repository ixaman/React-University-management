import EnrolledCourse from '../pages/student/EnrolledCourse';
import StudentDashboard from '../pages/student/StudentDashboard';

export const studentPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <StudentDashboard />,
  },
  {
    name: 'Enrolled Course',
    path: 'enrolled-course',
    element: <EnrolledCourse />,
  },
];
