import Home from './pages/home/home/Home';
import DetailCourse from './pages/home/detailCourse/DetailCourse';
import FormSignIn from './pages/home/formSignIn/FormSignIn';
import FormSignUp from './pages/home/formSignUp/FormSignUp';
import DetailCart from './pages/home/detailCart/DetailCart';
import allCourse from './pages/home/Course/allCourse';
import ProfileUser from './pages/home/profileUser/ProfileUser';

export const routesHome = [
  { path: '/', exact: true, component: Home },
  { path: '/home', exact: true, component: Home },
  { path: '/home/detail-cart', exact: false, component: DetailCart },
  { path: '/home/dang-nhap', exact: false, component: FormSignIn },
  { path: '/home/dang-ky', exact: false, component: FormSignUp },
  { path: '/home/courses/:id', exact: false, component: allCourse },
  { path: '/home/detail-course/:id', exact: false, component: DetailCourse },
  { path: '/home/profile', exact: false, component: ProfileUser },
];

export const routesAdmin = [
  //   {
  //     path: '/',
  //     exact: true,
  //     layout: DefaultAdminLayout,
  //     component: () => <Redirect to='/admin/dashboard' />,
  //   },
  //   {
  //     path: '/admin/courses',
  //     layout: DefaultAdminLayout,
  //     component: CourseManagement,
  //   },
  //   {
  //     path: '/admin/user',
  //     layout: DefaultAdminLayout,
  //     component: UsersManagement,
  //   },
];
