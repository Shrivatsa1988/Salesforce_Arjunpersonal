({
	handlerComponentEvent : function(component, event) 
    {
		var message=event.getParam("message");
        component.set("v.MessageFromEvent",message);
        var numEventsHandled=parseInt(component.get("v.numEvents"))+1;
        component.set("v.numEvents",numEventsHandled);
	}
})