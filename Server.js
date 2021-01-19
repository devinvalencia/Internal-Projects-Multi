(function() {
    // var user_id = $sp.getParameter("sys_id") || gs.getUserID();
    var user_id = 'f1ccf6781347a60043d1d7566144b0da';
	
	var p = {
		table: 'sn_hr_core_projects',
		fields: 'u_name,u_role,u_duration',
		filter : 'u_user=' + user_id,
		hide_header : true,
		hide_footer : true,
		show_new : true
	};
	
	data.url = "?id="+p.table+"&sys_id=-1&query=user%3D"+user_id;
	data.list = $sp.getWidget('widget-data-table', p);
		
	var gr = new GlideRecord(p.table);
	gr.addQuery(p.filter);
	gr.query();
	
    data.hasRecordsToShow = gr.getRowCount() > 0;
	
	gr.initialize();
	gr.user = user_id;
	data.canCreateRecord = gr.canCreate() && gr.canWrite();
	
})();

// sys_user sys_id = f1ccf6781347a60043d1d7566144b0da
// sn_hr_core_profile sys_id = 2bbde019dbe1a8901e5545e813961947