({
    getcontactname : function(component,event,helper)
    {
     var action = component.get("c.retContactname");
     action.setParams({id: component.get("v.Conid")});
  action.setCallback(this, function(a)
        {
         component.set("v.ContactName", a.getReturnValue());
   alert(a.getReturnValue());
           
        });
  $A.enqueueAction(action);
      
 },
 
 calculate1 : function(component, event, helper) 
    {
        var x= component.get("v.Amount");
        var y = component.get("v.Tenure");
        var z=0;
        alert(y);
        if (y<12)
        {
            z=x+1000;
        }
        if(y>12){
            z= x-1000;
        }
        component.set("v.Maturity",z)
        //alert(z);
        //helper.showmessage();
        $A.util.addClass(component,'changeme');
  
 }
    
    
})