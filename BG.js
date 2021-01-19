    var user_id = 'f1ccf6781347a60043d1d7566144b0da';
	
	var p = {
		table: 'sn_hr_core_projects',
		fields: 'u_name,u_role,u_duration',
		filter : 'u_user=' + user_id,
		hide_header : true,
		hide_footer : true,
		show_new : true
	};
		
	var gr = new GlideRecord(p.table);
	gr.addQuery(p.filter);
	gr.query();
	
    var hasRecordsToShow = gr.getRowCount() > 0;
    gs.info("This is how many records there are: " + hasRecordsToShow);
	
	gr.initialize();
	gr.user = user_id;