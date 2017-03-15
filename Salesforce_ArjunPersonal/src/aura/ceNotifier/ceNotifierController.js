({
	firecomponent : function(component, event) {
		var cmpEvent1=component.getEvent("cmpEvent");
        cmpEvent1.setParams({"message" :"a component event fired me"+
                             "it all happened"});
        cmpEvent1.fire();
	}
})