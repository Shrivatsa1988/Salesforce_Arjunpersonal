public with sharing class MyLightningClass {
@AuraEnabled    
    public static string retContactname(Id id)
    {
        List<Contact> lstcon=new List<Contact>();
        lstcon=[select name from Contact where id=:id];
        return lstcon[0].name;
    }
}