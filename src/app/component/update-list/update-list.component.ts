import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent {
  objectUpdatePr={
    name:"",
    image:"https://pixabay.com/vi/photos/thuy%e1%bb%81n-b%e1%ba%bfn-t%c3%a0u-b%e1%bb%9d-bi%e1%bb%83n-bi%e1%bb%83n-8005603/",
    description:""
  }
  keyUpdate=0;
  constructor(
    private controlPr:ServiceService,
    private router:ActivatedRoute,
    ){
      this.router.paramMap.subscribe((data:any)=>{
        const id=Number(data.get("id"));
        console.log(id);
        this.controlPr.getOnePr(id).subscribe((dataOne:any)=>{
          this.objectUpdatePr=dataOne;
          console.log(dataOne);
          
        });
      });
    };
    OnupdatePr(){
      this.controlPr.updatePr(this.objectUpdatePr).subscribe();      
      location.reload();
    }
}
