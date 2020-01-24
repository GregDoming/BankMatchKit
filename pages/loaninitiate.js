import React from "react"

const loaninitiate = () => {
    return <div><h1><center>Initiate Loan</center></h1>
    
    <h3><left>This 
        page should initiate a loan. Have several sub sections for a 
        loan. (1) Client Info (2) Loan Description (3) Documents
        (4) Lender List (5) To do list</left></h3>
        
        <h4>(1) Client Info: This should have Name, email and phone number</h4>
        <h4>(2)Loan Description: This should have name of business, type, 
            collaterial type, property type, misc criteria, etc. 
            These are the lists that get searched on. Also, there 
            should be a text box. </h4>
        <h4>(3) Documents: Documents should be laid out in a table, 
            with filenames and descriptions. There should be the ability to 
            download the attached documents (some or all), and the 
            list should be able to be appended to, entries addedd or 
            deleted, etc.</h4>
        <h4>(4) Lender List: This should be a table of lenders (name, 
            company, phone, email), and the ability to send emails to 
            some or all of the lenders. This list should be able to be 
            appended to or deleted from</h4>
        <h4>(5) To do list: Simple list of stuff to do, with CRM stuff, 
            like status (Done, not done), automatic emails, etc.</h4>
        </div>

}

export default loaninitiate
