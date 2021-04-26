export default function() {
	return [
		{
			title: 'Dashboard',
			to: '/admin/dashboard',
			htmlBefore: '<i class="material-icons">view_module</i>',
		},
		{
			title: 'Courses',
			htmlBefore: '<i class="material-icons">edit</i>',
			to: '/admin/courses',
		},
		{
			title: 'Users',
			htmlBefore: '<i class="material-icons">person</i>',
			to: '/admin/user',
		},
	];
}
