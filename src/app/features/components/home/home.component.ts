import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faFaceGrin, faPowerOff, faKey, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Robots } from '../../models/robots.model';
import { RobotsService } from '../../services/robots.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnChanges {
  faFaceGrin = faFaceGrin;
  faPowerOff = faPowerOff;
  faKey = faKey;
  faAddressCard = faAddressCard;
  Robots: Robots[] = [] as Robots[];
    //new Instruction
    instruction:any = [];
    NewAccessToken:string="";
  @Input() Username: string = '';
  @Input() Rol: number = 0;

  constructor(private robots: RobotsService) {
    


  }

  ngOnChanges(): void {
    switch (this.Rol) {
    case 1:
    this.GiveMe_AllRobots();
    break;
    case 2 :
    break;
 
}


  }
  GiveMe_AllRobots() {
    this.robots.GetRobots_SID().subscribe((data: any) => {
      this.Robots = data;
      console.log(this.Robots);
      
    });
  }


  Instruction(instruction:string, robot:Robots){
    switch(instruction){
      case "off":
        this.instruction = [instruction, robot];
        document.getElementById("modal")?.setAttribute("style", "display: block;");
        document.getElementById("confirmRequest")?.setAttribute("style", "display: block;");
        break;
      case "on":
        this.instruction = [instruction, robot];
        document.getElementById("modal")?.setAttribute("style", "display: block;");
        document.getElementById("confirmRequest")?.setAttribute("style", "display: block;");
        break;
      case "changeAccessToken":
        this.instruction = [instruction, robot];
        document.getElementById("modal")?.setAttribute("style", "display: block;");
        document.getElementById("changeToken")?.setAttribute("style", "display: block;");
        break;
    }
  }

  NextStep(){
    switch(this.instruction[0]){
      case "changeAccessToken":
        document.getElementById("changeToken")?.setAttribute("style", "display: none;");
        document.getElementById("confirmRequest")?.setAttribute("style", "display: block;");
        break;
    }
  }

  Send(){
    switch(this.instruction[0]){
      case "off":
        this.robots.UpNewInstruction(this.instruction[0], this.instruction[1].name).subscribe(data => {
          console.log(data);
          this.instruction = [];
          document.getElementById("modal")?.setAttribute("style", "display: none;");
          document.getElementById("confirmRequest")?.setAttribute("style", "display: none;");
          this.GiveMe_AllRobots();
        });

        break;
      case "on":
        this.robots.UpNewInstruction( this.instruction[0],this.instruction[1].name).subscribe(data => {
          console.log(data);
          this.instruction = [];
          document.getElementById("modal")?.setAttribute("style", "display: none;");
          document.getElementById("confirmRequest")?.setAttribute("style", "display: none;");
          this.GiveMe_AllRobots();
        });
        break;

        case "changeAccessToken":
          this.robots.UpNewInstruction(`${this.instruction[0]}=${this.NewAccessToken}`, this.instruction[1].name).subscribe(data => {
            this.instruction = [];
            this.NewAccessToken = "";
            document.getElementById("modal")?.setAttribute("style", "display: none;");
            document.getElementById("confirmRequest")?.setAttribute("style", "display: none;");  
            this.GiveMe_AllRobots();      
          });
          break;
      
    }
  }

  CancelModal(){
    this.instruction = [];
    document.getElementById("modal")?.setAttribute("style", "display: none;");
    document.getElementById("confirmRequest")?.setAttribute("style", "display: none;");
  }


}
