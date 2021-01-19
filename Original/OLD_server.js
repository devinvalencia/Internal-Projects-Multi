(function() {
	var user_id = $sp.getParameter("sys_id") || gs.getUserID();
	
	var p = {
		table: 'sn_hr_core_contact',
		fields: 'name,relation_to_employee,emergency_contact',
		filter : 'user=' + user_id,
		hide_header : true,
		hide_footer : true,
		show_new : true
	};
	
	data.url = "?id=hri_contact_form&sys_id=-1&query=user%3D"+user_id;
	data.list = $sp.getWidget('widget-data-table', p);
		
	var gr = new GlideRecord(p.table);
	gr.addQuery(p.filter);
	gr.query();
	
	data.hasRecordsToShow = gr.getRowCount() > 0;
	
	gr.initialize();
	gr.user = user_id;
	data.canAddContact = gr.canCreate() && gr.canWrite();
	
})();