import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ManagmentService } from 'src/app/features/services/managment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { EstadosKeys } from 'src/app/features/models/prices.model';
import { NewPasswordComponent } from '../new-password/new-password.component';
import { type } from 'os';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})


export class EditUserComponent implements OnInit {

  faPen = faPen;
  cam2 = 0;
  usernameLocal: any;
  //VARIABLES PARA CAMBIO DE VISTA EN PRECIOS 
  VUnit: boolean = false;
  VEsta: boolean = true;
  Vedit: boolean = true;
  cam = 0;
  isBloq: boolean = true;
  //Lista de precios de actas
  nac: number = 0;
  mat: number = 150;
  def: number = 160;
  div: number = 160;
  cot: number = 40;
  der: number = 40;
  nss: number = 50;
  rfc: number = 100;
  inh: number = 140;
  //Nuevos servicios
  ret: number = 0;
  sus: number = 0;
  ecu: number = 0;
  reset: number = 0;
  arfc: number = 0;
  dnac: number = 0;
  curp: number = 0;
  cfe: number = 0;
  //Others
  myRol: any;

  //Lista de precios por estado
  BAJACALIFORNIA: number = 140;
  YUCATAN: number = 135;
  BAJACALIFORNIASUR: number = 130;
  VERACRUZ: number = 125;
  COAHUILA: number = 110;
  MICHOACAN: number = 100;
  TLAXCALA: number = 100;
  DURANGO: number = 95;
  AGUASCALIENTES: number = 85;
  CHIAPAS: number = 100;
  HIDALGO: number = 85;
  PUEBLA: number = 85;
  QUERETARO: number = 85;
  CHIHUAHA: number = 85;
  OAXACA: number = 80;
  SONORA: number = 80;
  SANLUISPOTOSI: number = 80;
  SINALOA: number = 75;
  GUERRERO: number = 75;
  ZACATECAS: number = 75;
  TAMAULIPAS: number = 70;
  MORELOS: number = 70;
  TABASCO: number = 70;
  GUANAJUATO: number = 70;
  COLIMA: number = 70;
  JALISCO: number = 70;
  CDMX: number = 60;
  NAYARIT: number = 55;
  CAMPECHE: number = 50;
  NUEVOLEON: number = 50;
  MEXICO: number = 48;
  QUINTANAROO: number = 50;
  EXTRANJERO: number = 120;

  EditarDatosForm!: FormGroup;
  EditarCostosForm!: FormGroup;
  FinForm!: FormGroup;
  /** NUEVOS CAMBIOS  */

  EstadosKeys: any = EstadosKeys;
  UsuariosKey: any | undefined;
  id: any;

  constructor(private svc: ManagmentService,
    private modal: MatDialogRef<EditUserComponent>,
    private readonly formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) { }
  change() {

    if (this.cam == 0) {
      this.isBloq = false;
      this.VUnit = false;
      this.VEsta = true;
      this.cam = 1;

    }
  }
  change2() {
    if (this.cam == 1) {
      this.isBloq = true;
      this.VUnit = true;
      this.VEsta = false;
      this.cam = 0;
    }
  }

  changeEdit() {
    if (this.cam2 == 0) {
      this.Vedit = false;
      this.cam2 = 1;
    }
  }

  ngOnInit(): void {
    this.initEditarDatos();
    this.initEditarCostos();
    this.initFinForm();
    this.EditarDatosForm.get('username')?.setValue(this.usernameLocal.username);
    this.EditarDatosForm.get('password')?.setValue(this.usernameLocal.password);
    this.EditarDatosForm.get('rol')?.setValue(this.usernameLocal.rol);

    if (typeof (this.usernameLocal.precios.nac) == 'string' || typeof (this.usernameLocal.precios.nac) == 'number') {
      this.VUnit = true;
      this.VEsta = false;
      this.EditarCostosForm.get('nac')?.setValue(this.usernameLocal.precios.nac);
    }
    else {

      //Estados
      this.EditarCostosForm.get('bcn')?.setValue(this.usernameLocal.precios.bcn);
      this.EditarCostosForm.get('yuca')?.setValue(this.usernameLocal.precios.yuca);
      this.EditarCostosForm.get('bcs')?.setValue(this.usernameLocal.precios.bcs);
      this.EditarCostosForm.get('vera')?.setValue(this.usernameLocal.precios.vera);
      this.EditarCostosForm.get('coah')?.setValue(this.usernameLocal.precios.coah);
      this.EditarCostosForm.get('mich')?.setValue(this.usernameLocal.precios.mich);
      this.EditarCostosForm.get('tlax')?.setValue(this.usernameLocal.precios.tlax);
      this.EditarCostosForm.get('dura')?.setValue(this.usernameLocal.precios.dura);
      this.EditarCostosForm.get('agua')?.setValue(this.usernameLocal.precios.agua);
      this.EditarCostosForm.get('chia')?.setValue(this.usernameLocal.precios.chia);
      this.EditarCostosForm.get('hida')?.setValue(this.usernameLocal.precios.hida);
      this.EditarCostosForm.get('pueb')?.setValue(this.usernameLocal.precios.pueb);
      this.EditarCostosForm.get('quer')?.setValue(this.usernameLocal.precios.quer);
      this.EditarCostosForm.get('chih')?.setValue(this.usernameLocal.precios.chih);
      this.EditarCostosForm.get('oaxa')?.setValue(this.usernameLocal.precios.oaxa);
      this.EditarCostosForm.get('sono')?.setValue(this.usernameLocal.precios.sono);
      this.EditarCostosForm.get('slp')?.setValue(this.usernameLocal.precios.slp);
      this.EditarCostosForm.get('sina')?.setValue(this.usernameLocal.precios.sina);
      this.EditarCostosForm.get('guer')?.setValue(this.usernameLocal.precios.guer);
      this.EditarCostosForm.get('zaca')?.setValue(this.usernameLocal.precios.zaca);
      this.EditarCostosForm.get('tama')?.setValue(this.usernameLocal.precios.tama);
      this.EditarCostosForm.get('more')?.setValue(this.usernameLocal.precios.more);
      this.EditarCostosForm.get('taba')?.setValue(this.usernameLocal.precios.taba);
      this.EditarCostosForm.get('guan')?.setValue(this.usernameLocal.precios.guan);
      this.EditarCostosForm.get('coli')?.setValue(this.usernameLocal.precios.coli);
      this.EditarCostosForm.get('jali')?.setValue(this.usernameLocal.precios.jali);
      this.EditarCostosForm.get('cdmx')?.setValue(this.usernameLocal.precios.cdmx);
      this.EditarCostosForm.get('naya')?.setValue(this.usernameLocal.precios.naya);
      this.EditarCostosForm.get('camp')?.setValue(this.usernameLocal.precios.camp);
      this.EditarCostosForm.get('nl')?.setValue(this.usernameLocal.precios.nl);
      this.EditarCostosForm.get('mex')?.setValue(this.usernameLocal.precios.mex);
      this.EditarCostosForm.get('qroo')?.setValue(this.usernameLocal.precios.qroo);
      this.EditarCostosForm.get('ext')?.setValue(this.usernameLocal.precios.ext);
    }
    //Prices
    this.EditarCostosForm.get('mat')?.setValue(this.usernameLocal.precios.mat);
    this.EditarCostosForm.get('def')?.setValue(this.usernameLocal.precios.def);
    this.EditarCostosForm.get('div')?.setValue(this.usernameLocal.precios.div);
    this.EditarCostosForm.get('cot')?.setValue(this.usernameLocal.precios.cot);
    this.EditarCostosForm.get('der')?.setValue(this.usernameLocal.precios.der);
    this.EditarCostosForm.get('nss')?.setValue(this.usernameLocal.precios.nss);
    this.EditarCostosForm.get('rfc')?.setValue(this.usernameLocal.precios.rfc);
    this.EditarCostosForm.get('inh')?.setValue(this.usernameLocal.precios.inh);
    this.EditarCostosForm.get('ret')?.setValue(this.usernameLocal.precios.ret);
    this.EditarCostosForm.get('sus')?.setValue(this.usernameLocal.precios.sus);
    this.EditarCostosForm.get('ecu')?.setValue(this.usernameLocal.precios.ecu);
    this.EditarCostosForm.get('reset')?.setValue(this.usernameLocal.precios.reset);
    this.EditarCostosForm.get('arfc')?.setValue(this.usernameLocal.precios.arfc);
    this.EditarCostosForm.get('dnac')?.setValue(this.usernameLocal.precios.dnac);
    this.EditarCostosForm.get('curp')?.setValue(this.usernameLocal.precios.curp);
    this.EditarCostosForm.get('cfe')?.setValue(this.usernameLocal.precios.cfe);

    this.FinForm.get('nombre')?.setValue(this.usernameLocal.nombre);
    this.FinForm.get('type')?.setValue(this.usernameLocal.type);
  }
  actuUser(): void {
    let _prices = {
      nac: this.VUnit ? this.EditarCostosForm.get('nac')?.value :
        {
          bcn: this.EditarCostosForm.get(EstadosKeys.BAJACALIFORNIA)?.value,
          yuca: this.EditarCostosForm.get(EstadosKeys.YUCATAN)?.value,
          bcs: this.EditarCostosForm.get(EstadosKeys.BAJACALIFORNIASUR)?.value,
          vera: this.EditarCostosForm.get(EstadosKeys.VERACRUZ)?.value,
          coah: this.EditarCostosForm.get(EstadosKeys.COAHUILA)?.value,
          mich: this.EditarCostosForm.get(EstadosKeys.MICHOACAN)?.value,
          tlax: this.EditarCostosForm.get(EstadosKeys.TLAXCALA)?.value,
          dura: this.EditarCostosForm.get(EstadosKeys.DURANGO)?.value,
          agua: this.EditarCostosForm.get(EstadosKeys.AGUASCALIENTES)?.value,
          chia: this.EditarCostosForm.get(EstadosKeys.CHIAPAS)?.value,
          hida: this.EditarCostosForm.get(EstadosKeys.HIDALGO)?.value,
          pueb: this.EditarCostosForm.get(EstadosKeys.PUEBLA)?.value,
          quer: this.EditarCostosForm.get(EstadosKeys.QUERETARO)?.value,
          chih: this.EditarCostosForm.get(EstadosKeys.CHIHUAHA)?.value,
          oaxa: this.EditarCostosForm.get(EstadosKeys.OAXACA)?.value,
          sono: this.EditarCostosForm.get(EstadosKeys.SONORA)?.value,
          slp: this.EditarCostosForm.get(EstadosKeys.SANLUISPOTOSI)?.value,
          sina: this.EditarCostosForm.get(EstadosKeys.SINALOA)?.value,
          guer: this.EditarCostosForm.get(EstadosKeys.GUERRERO)?.value,
          zaca: this.EditarCostosForm.get(EstadosKeys.ZACATECAS)?.value,
          tama: this.EditarCostosForm.get(EstadosKeys.TAMAULIPAS)?.value,
          more: this.EditarCostosForm.get(EstadosKeys.MORELOS)?.value,
          taba: this.EditarCostosForm.get(EstadosKeys.TABASCO)?.value,
          guan: this.EditarCostosForm.get(EstadosKeys.GUANAJUATO)?.value,
          coli: this.EditarCostosForm.get(EstadosKeys.COLIMA)?.value,
          jali: this.EditarCostosForm.get(EstadosKeys.JALISCO)?.value,
          cdmx: this.EditarCostosForm.get(EstadosKeys.CDMX)?.value,
          naya: this.EditarCostosForm.get(EstadosKeys.NAYARIT)?.value,
          camp: this.EditarCostosForm.get(EstadosKeys.CAMPECHE)?.value,
          nl: this.EditarCostosForm.get(EstadosKeys.NUEVOLEON)?.value,
          mex: this.EditarCostosForm.get(EstadosKeys.MEXICO)?.value,
          qroo: this.EditarCostosForm.get(EstadosKeys.QUERETARO)?.value,
          ext: this.EditarCostosForm.get(EstadosKeys.EXTRANJERO)?.value,

        },
      def: this.EditarCostosForm.get('def')?.value,
      div: this.EditarCostosForm.get('div')?.value,
      cot: this.EditarCostosForm.get('cot')?.value,
      der: this.EditarCostosForm.get('der')?.value,
      nss: this.EditarCostosForm.get('nss')?.value,
      rfc: this.EditarCostosForm.get('rfc')?.value,
      inh: this.EditarCostosForm.get('inh')?.value,
      ret: this.EditarCostosForm.get('ret')?.value,
      sus: this.EditarCostosForm.get('sus')?.value,
      ecu: this.EditarCostosForm.get('ecu')?.value,
      mat: this.EditarCostosForm.get('mat')?.value,
      reset: this.EditarCostosForm.get('reset')?.value,
      arfc: this.EditarCostosForm.get('arfc')?.value,
      dnac: this.EditarCostosForm.get('dnac')?.value,
      curp: this.EditarCostosForm.get('curp')?.value,
      cfe: this.EditarCostosForm.get('cfe')?.value,
    };

    let us: any = {
      username: this.EditarDatosForm.value?.username,
      password: this.EditarDatosForm.value?.password,
      rol: this.EditarDatosForm.value?.rol,
      idSuper: this.EditarDatosForm.value?.responsable?.id,
      status: this.FinForm.value?.status == 'true' ? true : false,
      type: this.FinForm.value?.type,
      nombre: this.FinForm.value?.nombre,
      precios: _prices
    };
    this.modal.close(us);
  }

  newPassword(){
    const _pass = this.dialog.open(NewPasswordComponent, {width: 'md'})
    _pass.componentInstance.pass = this.EditarDatosForm.get('password')?.value;
    _pass.afterClosed().subscribe((d: any)=>{
      
    })
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
    })
  }

  initEditarDatos(): void {
    this.EditarDatosForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required],
      responsable: [{}, Validators.required]
    });

  }
  initEditarCostos(): void {
    this.EditarCostosForm = this.formBuilder.group({
      nac: [this.nac, Validators.required],
      mat: [this.mat, Validators.required],
      def: [this.def, Validators.required],
      div: [this.div, Validators.required],
      cot: [this.cot, Validators.required],
      der: [this.der, Validators.required],
      nss: [this.nss, Validators.required],
      rfc: [this.rfc, Validators.required],
      inh: [this.inh, Validators.required],
      ret: [this.ret, Validators.required],
      sus: [this.sus, Validators.required],
      ecu: [this.ecu, Validators.required],
      reset: [this.reset, Validators.required],
      arfc: [this.arfc, Validators.required],
      dnac: [this.dnac, Validators.required],
      curp: [this.curp, Validators.required],
      cfe: [this.cfe, Validators.required],
      BAJACALIFORNIA: [this.BAJACALIFORNIA, Validators.required],
      YUCATAN: [this.YUCATAN, Validators.required],
      BAJACALIFORNIASUR: [this.BAJACALIFORNIASUR, Validators.required],
      VERACRUZ: [this.VERACRUZ, Validators.required],
      COAHUILA: [this.COAHUILA, Validators.required],
      MICHOACAN: [this.MICHOACAN, Validators.required],
      TLAXCALA: [this.TLAXCALA, Validators.required],
      DURANGO: [this.DURANGO, Validators.required],
      AGUASCALIENTES: [this.AGUASCALIENTES, Validators.required],
      CHIAPAS: [this.CHIAPAS, Validators.required],
      HIDALGO: [this.HIDALGO, Validators.required],
      PUEBLA: [this.PUEBLA, Validators.required],
      QUERETARO: [this.QUERETARO, Validators.required],
      CHIHUAHA: [this.CHIHUAHA, Validators.required],
      OAXACA: [this.OAXACA, Validators.required],
      SONORA: [this.SONORA, Validators.required],
      SANLUISPOTOSI: [this.SANLUISPOTOSI, Validators.required],
      SINALOA: [this.SINALOA, Validators.required],
      GUERRERO: [this.GUERRERO, Validators.required],
      ZACATECAS: [this.ZACATECAS, Validators.required],
      TAMAULIPAS: [this.TAMAULIPAS, Validators.required],
      MORELOS: [this.MORELOS, Validators.required],
      TABASCO: [this.TABASCO, Validators.required],
      GUANAJUATO: [this.GUANAJUATO, Validators.required],
      COLIMA: [this.COLIMA, Validators.required],
      JALISCO: [this.JALISCO, Validators.required],
      CDMX: [this.CDMX, Validators.required],
      NAYARIT: [this.NAYARIT, Validators.required],
      CAMPECHE: [this.CAMPECHE, Validators.required],
      NUEVOLEON: [this.NUEVOLEON, Validators.required],
      MEXICO: [this.MEXICO, Validators.required],
      QUINTANAROO: [this.QUINTANAROO, Validators.required],
      EXTRANJERO: [this.EXTRANJERO, Validators.required]
    })
  }

  initFinForm(): void {
    this.FinForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      type: ['', Validators.required],
      status: ['',]
    });
  }
}


