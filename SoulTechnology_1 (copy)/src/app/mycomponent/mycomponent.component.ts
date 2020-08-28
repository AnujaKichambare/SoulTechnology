import { Component, OnInit } from '@angular/core';
import { DomainService } from '../domain.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  domain:any;
  product1
  product2


  constructor( public service:DomainService ) { }

  setDomain(formData:any)
  {
    let value=formData.form.value;
    console.log(value)
    
    if(value.domain=="domain1")
    {
      this.service.getData().subscribe((result)=>{
        
        this.product1=result['data'].product1;
        this.product2=result['data'].product2;
         
       
      });
    }else
    {
      this.service.getData2().subscribe((result)=>{
        
        this.product1=result['data'].product1;
        this.product2=result['data'].product2;
      });
    }
  }

  
 

  ngOnInit() {
  }

}
