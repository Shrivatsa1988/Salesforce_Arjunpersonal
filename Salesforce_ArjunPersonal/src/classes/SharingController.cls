public  class  SharingController {
    public String SelectedRecord{get;set;}
    public String getResults() {
        return null;
    }
     public List<Opportunity> OppList {get;set;}
     public  List<Contact> contList {get;set;}
     public List<Account> AccList {get;set;}
     public List<Shrivatsa__Contact2__c> Contact2List {get;set;}

    public PageReference NaviagateToRecord()
    {
        PageReference acctPage = new PageReference('/'+SelectedRecord+'?retURL=%2Fa'+SelectedRecord);
        acctPage.setRedirect(false);
        return acctPage ;
    }

    public PageReference doSearch() {
    
       List<List<sObject>> searchObjects= searchOppsContactAccCnct2(searchText);
        OppList = ((List<Opportunity>)searchObjects[0]);
        contList = ((List<Contact>)searchObjects[1]);
        AccList = ((List<Account>)searchObjects[2]);
        Contact2List = ((List<Shrivatsa__Contact2__c>)searchObjects[3]);
        return null;
    }

     Public static List<List<sObject>> searchOppsContactAccCnct2(String searchword)
        {
            String searchQuery = 'FIND \'' + searchword + '\' IN ALL FIELDS RETURNING Opportunity(Name,Type,CloseDate), Contact(FirstName,LastName ),Account(Name,AccountNumber,Phone),Shrivatsa__Contact2__c(Id,Name,Shrivatsa__EF_User_ID__c,  Shrivatsa__Email__c)';
            List<List<sObject>> searchOppsContactAccCnct2Lst= search.query(searchQuery);
            return searchOppsContactAccCnct2Lst;
        }
    public string searchText{get;set;}

    

}