import React from 'react'
import TableComponent from './TableComponent'

const TableInit = () => {
    const jsonData = [
        {
            "id" : 1,
            "Company" : "McDonalds",
            "url" :  "images/mcd.png",
            "product" : "Big Mac Jumbo",
            "active_order" : 134,
            "amount" : 9,
            "placed_on" : "06/03/2022",
            "status" : "Confirmed"
        },
            
            {
            "id" : 2,
            "Company" : "Tesla",
            "url" :  "images/tesla.png",
            "product" : "Model X",
            "active_order" : 500,
            "amount" : 3000,
            "placed_on" : "12/02/2022",
            "status" : "Delivered"  
            },
            
            {  
              "id" : 3,
              "Company" : "Disney",
              "url" :  "images/disney.png",
              "product" : "Renewal Subscription",
              "active_order" : 276,
              "amount" : 23,
              "placed_on" : "09/04/2023",
              "status" : "Refund Completed (30d)"
            },
            
            {
            "id" : 4,
    
            "Company" : "GM",
            "url" :  "images/gm.png",
            "product" : "Alternator Car Parts",
            "active_order" : 2,
            "amount" : 49,
            "placed_on" : "04/09/2023",
            "status" : "Pending"
           },
           
            {
            "id" : 5,
    
            "Company" : "AARP",
            "url" :  "images/aarp.png",
            "product" : "Health Care Package Adult A1",
            "active_order" : 89,
            "amount" : 299,
            "placed_on" : "01/02/2023",
            "status" : "Delivered"
           },
            
           {
            "id" : 6,
    
            "Company" : "Prime Theraputics",
            "url" :  "images/primetherp.png",
            "product" : "Natural oil",
            "active_order" : 1098,
            "amount" : 135,
            "placed_on" : "06/03/2022",
            "status" : "Confirmed"
           },
            
           {
            "id" : 7,
    
            "Company" : "Match.com",
            "url" :  "images/match.png",
            "product" : "Renewal Subscription",
            "active_order" : 4298,
            "amount" : 48,
            "placed_on" : "12/02/2022",
            "status" : "Pending"
           },
        
           {
            "id" : 8,
    
            "Company" : "Chevy",
            "url" :  "images/chevy.png",
            "product" : "FX234A",
            "active_order" : 1928,
            "amount" : 90,
            "placed_on" : "04/19/2023",
            "status" : "Refund completed (30d)"
           },
        
           {
            "id" : 9,
    
            "Company" : "GM",
            "url" :  "images/gm2.png",
            "product" : "Car Parts AJZ89B",
            "active_order" : 640,
            "amount" : 167,
            "placed_on" : "01/02/2023",
            "status" : "Refund completed (30d)"
           },
    
           {
            "id" : 10,
    
            "Company" : "GM",
            "url" :  "images/gm2.png",
            "product" : "Car Parts AJZ89B",
            "active_order" : 640,
            "amount" : 167,
            "placed_on" : "01/02/2023",
            "status" : "Refund completed (30d)"
           },
    
           {
            "id" : 11,
    
            "Company" : "GM",
            "url" :  "images/gm2.png",
            "product" : "Car Parts AJZ89B",
            "active_order" : 640,
            "amount" : 167,
            "placed_on" : "01/02/2023",
            "status" : "Refund completed (30d)"
           },
    
           {
            "id" : 12,
    
            "Company" : "GM",
            "url" :  "images/gm2.png",
            "product" : "Car Parts AJZ89B",
            "active_order" : 640,
            "amount" : 167,
            "placed_on" : "01/02/2023",
            "status" : "Refund completed (30d)"
           },
    
           {
            "id" : 13,
    
            "Company" : "GM",
            "url" :  "images/gm2.png",
            "product" : "Car Parts AJZ89B",
            "active_order" : 640,
            "amount" : 167,
            "placed_on" : "01/02/2023",
            "status" : "Refund completed (30d)"
           },
    
           {
            "id" : 14,
    
            "Company" : "GM",
            "url" :  "images/gm2.png",
            "product" : "Car Parts AJZ89B",
            "active_order" : 640,
            "amount" : 167,
            "placed_on" : "01/02/2023",
            "status" : "Refund completed (30d)"
           }    

    ];
  return (
    <div>
        <TableComponent jsonData={jsonData} />
    </div>
  )
}

export default TableInit