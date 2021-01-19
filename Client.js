function hriContactsController($scope, spUtil, $location) {

	$scope.$on('data_table.click', function(e, parms){
		var s = {id: 'sn_hr_core_projects', table: parms.table, sys_id: parms.sys_id, view: 'sp'};
		$location.search(s);
	});
}