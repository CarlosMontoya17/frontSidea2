import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  faFaceGrin,
  faPowerOff,
  faKey,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { SimpleMixed } from 'src/app/shared/alerts';
import Swal from 'sweetalert2';
import { Robots } from '../../models/robots.model';
import { RobotsService } from '../../services/robots.service';
import { UtilsService } from '../../services/utils.service';
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
  statu: any;
  //new Instruction
  instruction: any = [];
  NewAccessToken: string = '';
  @Input() Username: string = '';
  @Input() Rol: number = 0;

  constructor(private robots: RobotsService, private utils: UtilsService) {}

  ngOnChanges(): void {
    switch (this.Rol) {
      case 1:
        this.GiveMe_AllRobots();
        break;
      case 2:
        break;
    }
  }
  save: boolean = false;
  autoSave() {
    setInterval(() => {
      this.refresh();
      this.save = true;
    }, 1000);
  }
  refresh(): void {
    setTimeout(function () {
      window.location.reload();
    }, 20000);
  }
  GiveMe_AllRobots() {
    this.robots.GetRobots_SID().subscribe(
      (data: any) => {
        this.Robots = data;
        this.statu = data;
        for (let i = 0; i < this.statu.length; i++) {
          console.log(this.statu[i]);
          if (
            this.statu[i].status == 'Off' &&
            this.statu[i].name == 'RFCPOAM'
          ) {
            this.autoSave();
            SimpleMixed('warning', 'Robot de RFC Apagado');
          } else if (
            this.statu[i].status == 'Off' &&
            this.statu[i].name == 'Registro Civil 1'
          ) {
            SimpleMixed('warning', 'Robot de Registro Civil 1 Apagado');
            this.autoSave();
          } else if (
            this.statu[i].status == 'Off' &&
            this.statu[i].name == 'Registro Civil 2'
          ) {
            SimpleMixed('warning', 'Robot de Registro Civil 2 Apagado');
            this.autoSave();
          } else if (
            this.statu[i].status == 'Off' &&
            this.statu[i].name == 'Registro Civil 3'
          ) {
            SimpleMixed('warning', 'Robot de Registro Civil 3 Apagado');
            this.autoSave();
          } else if (
            this.statu[i].status == 'Off' &&
            this.statu[i].name == 'Toluca 3'
          ) {
            SimpleMixed('warning', 'Robot de Toluca 3 Apagado');
            this.autoSave();
          }
        }
      },
      (err: any) => this.utils.ErrorManage(err)
    );
  }

  Instruction(instruction: string, robot: Robots) {
    switch (instruction) {
      case 'off':
        this.instruction = [instruction, robot];
        document
          .getElementById('modal')
          ?.setAttribute('style', 'display: block;');
        document
          .getElementById('confirmRequest')
          ?.setAttribute('style', 'display: block;');
        break;
      case 'on':
        this.instruction = [instruction, robot];
        document
          .getElementById('modal')
          ?.setAttribute('style', 'display: block;');
        document
          .getElementById('confirmRequest')
          ?.setAttribute('style', 'display: block;');
        break;
      case 'changeAccessToken':
        this.instruction = [instruction, robot];
        document
          .getElementById('modal')
          ?.setAttribute('style', 'display: block;');
        document
          .getElementById('changeToken')
          ?.setAttribute('style', 'display: block;');
        break;
    }
  }

  NextStep() {
    switch (this.instruction[0]) {
      case 'changeAccessToken':
        document
          .getElementById('changeToken')
          ?.setAttribute('style', 'display: none;');
        document
          .getElementById('confirmRequest')
          ?.setAttribute('style', 'display: block;');
        break;
    }
  }

  Send() {
    switch (this.instruction[0]) {
      case 'off':
        this.robots
          .UpNewInstruction(this.instruction[0], this.instruction[1].name)
          .subscribe((data) => {
            this.instruction = [];
            document
              .getElementById('modal')
              ?.setAttribute('style', 'display: none;');
            document
              .getElementById('confirmRequest')
              ?.setAttribute('style', 'display: none;');
            this.GiveMe_AllRobots();
          });

        break;
      case 'on':
        this.robots
          .UpNewInstruction(this.instruction[0], this.instruction[1].name)
          .subscribe((data) => {
            this.instruction = [];
            document
              .getElementById('modal')
              ?.setAttribute('style', 'display: none;');
            document
              .getElementById('confirmRequest')
              ?.setAttribute('style', 'display: none;');
            this.GiveMe_AllRobots();
          });
        break;

      case 'changeAccessToken':
        this.robots
          .UpNewInstruction(
            `${this.instruction[0]}=${this.NewAccessToken}`,
            this.instruction[1].name
          )
          .subscribe((data) => {
            this.instruction = [];
            this.NewAccessToken = '';
            document
              .getElementById('modal')
              ?.setAttribute('style', 'display: none;');
            document
              .getElementById('confirmRequest')
              ?.setAttribute('style', 'display: none;');
            this.GiveMe_AllRobots();
          });
        break;
    }
  }

  CancelModal() {
    this.instruction = [];
    document.getElementById('modal')?.setAttribute('style', 'display: none;');
    document
      .getElementById('confirmRequest')
      ?.setAttribute('style', 'display: none;');
  }
}
