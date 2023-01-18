import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { EstadosKeys } from 'src/app/features/models/prices.model'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SelectProviderComponent } from '../select-provider/select-provider.component';
import { Roles } from 'src/app/core/models/roles.model';
import { UtilsService } from 'src/app/features/services/utils.service';
import { CountdownService } from 'src/app/shared/services/countdown.service';
import { UserInfo } from 'src/app/core/models/auth.model';


@Component({
  selector: 'app-agreusuario',
  templateUrl: './agreusuario.component.html',
  styleUrls: ['./agreusuario.component.scss'],
  providers: [

    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AgreusuarioComponent implements OnInit {
  //varaibles para el cambio de rol y de vista

  TimeToView: number = 0;

  alert: any = [];
  //Others
  myData:any;
  Roles = Roles;
  //----
  VUnit: boolean = false;

  VEsta: boolean = true;
  cam = 0;
  isBloq: boolean = true;

  EstadosKeys: any = EstadosKeys;
  UsuariosKey!: UserInfo;

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
  //Variable de precios por estado

  DatosGForm!: FormGroup;
  CostosForm!: FormGroup;
  FinForm!: FormGroup;
  faMagnifyingGlass = faMagnifyingGlass;

  /**Nuevos cambios */
  Provider:any;

  constructor(
    private formBuilder: FormBuilder,
    private modal: MatDialogRef<AgreusuarioComponent>,
    private dialog: MatDialog,
    private utils: UtilsService,
    private CountDown: CountdownService
  ) {
    this.modal.disableClose = true;
   }

   ngOnInit(): void {
    this.initDatosG();
    this.initCostosForm();
    this.initFinForm();
    if(this.myData){

    }
  }
  
  //CAMBIAMOS VISTA A UNITARIO
  change() {
    if (this.cam == 0) {
      this.isBloq = false;
      this.VUnit = true;
      this.VEsta = false;
      this.cam = 1;

    }
  }
  change2() {
    if (this.cam == 1) {
      this.isBloq = true;
      this.VUnit = false;
      this.VEsta = true;
      this.cam = 0;
    }
  }
  selectProvider() {
    const _prov = this.dialog.open(SelectProviderComponent, {width: 'md'});
    _prov.componentInstance.Rol = this.DatosGForm.get('rol')?.value;
  
    _prov.afterClosed().subscribe((data:any) => {
      if(data){
        this.Provider = data;
        this.DatosGForm.get('responsable')?.setValue(data);
      }
    });
  }

  //SELECCIONAMOS EL PRECIO DEL USUARIO
  setPriceUsername() {
    if (this.myData?.username == 'Pruebas') {
      this.nac = 0;
      this.mat = 150;
      this.def = 150;
      this.div = 150;
      this.cot = 40;
      this.der = 40;
      this.nss = 50;
      this.rfc = 100;
      this.inh = 130;
      ///Nuevos Servicios
      this.ret = 100;
      this.sus = 100;
      this.ecu = 200;
      this.reset = 650;
      this.arfc = 1700;
      this.dnac = 1700;
      this.cfe = 20;
      this.curp = 20;
      //Estados
      this.BAJACALIFORNIA = 130;
      this.YUCATAN = 125;
      this.BAJACALIFORNIASUR = 120;
      this.VERACRUZ = 125;
      this.COAHUILA = 100;
      this.MICHOACAN = 90;
      this.TLAXCALA = 90;
      this.DURANGO = 85;
      this.AGUASCALIENTES = 75;
      this.CHIAPAS = 90;
      this.HIDALGO = 75;
      this.PUEBLA = 75;
      this.QUERETARO = 75;
      this.CHIHUAHA = 75;
      this.OAXACA = 70;
      this.SONORA = 70;
      this.SANLUISPOTOSI = 70;
      this.SINALOA = 65;
      this.GUERRERO = 65;
      this.ZACATECAS = 65;
      this.TAMAULIPAS = 60;
      this.MORELOS = 60;
      this.TABASCO = 60;
      this.GUANAJUATO = 60;
      this.COLIMA = 60;
      this.JALISCO = 60;
      this.CDMX = 50;
      this.NAYARIT = 45;
      this.CAMPECHE = 40;
      this.NUEVOLEON = 40;
      this.MEXICO = 38;
      this.QUINTANAROO = 40;
      this.EXTRANJERO = 120;

    } else if (
      this.myData?.username == 'Publico David' ||
      this.myData?.username == 'Jose Daniel'
    ) {
      this.nac = 0;
      this.mat = 150;
      this.def = 150;
      this.div = 150;
      this.cot = 40;
      this.der = 40;
      this.nss = 40;
      this.rfc = 120;
      this.inh = 130;

      this.ret = 100;
      this.sus = 100;
      this.ecu = 200;
      this.reset = 650;
      this.arfc = 1700;
      this.dnac = 1700;
      this.cfe = 20;
      this.curp = 20;
      //Estados
      this.BAJACALIFORNIA = 140;
      this.YUCATAN = 135;
      this.BAJACALIFORNIASUR = 130;
      this.VERACRUZ = 125;
      this.COAHUILA = 110;
      this.MICHOACAN = 100;
      this.TLAXCALA = 100;
      this.DURANGO = 95;
      this.AGUASCALIENTES = 85;
      this.CHIAPAS = 110;
      this.HIDALGO = 85;
      this.PUEBLA = 85;
      this.QUERETARO = 75;
      this.CHIHUAHA = 85;
      this.OAXACA = 80;
      this.SONORA = 80;
      this.SANLUISPOTOSI = 80;
      this.SINALOA = 75;
      this.GUERRERO = 75;
      this.ZACATECAS = 75;
      this.TAMAULIPAS = 70;
      this.MORELOS = 70;
      this.TABASCO = 70;
      this.GUANAJUATO = 70;
      this.COLIMA = 70;
      this.JALISCO = 70;
      this.CDMX = 70;
      this.NAYARIT = 70;
      this.CAMPECHE = 70;
      this.NUEVOLEON = 70;
      this.MEXICO = 70;
      this.QUINTANAROO = 70;
      this.EXTRANJERO = 120;
    }


  }

  createOne(): void {
    let _prices = {
      nac: this.VUnit? this.CostosForm.get('nac')?.value: 
      {
        bcn: this.CostosForm.get(EstadosKeys.BAJACALIFORNIA)?.value,
        yuca: this.CostosForm.get(EstadosKeys.YUCATAN)?.value,
        bcs: this.CostosForm.get(EstadosKeys.BAJACALIFORNIASUR)?.value,
        vera:this.CostosForm.get(EstadosKeys.VERACRUZ)?.value,
        coah: this.CostosForm.get(EstadosKeys.COAHUILA)?.value,
        mich: this.CostosForm.get(EstadosKeys.MICHOACAN)?.value,
        tlax: this.CostosForm.get(EstadosKeys.TLAXCALA)?.value,
        dura: this.CostosForm.get(EstadosKeys.DURANGO)?.value,
        agua: this.CostosForm.get(EstadosKeys.AGUASCALIENTES)?.value,
        chia: this.CostosForm.get(EstadosKeys.CHIAPAS)?.value,
        hida: this.CostosForm.get(EstadosKeys.HIDALGO)?.value,
        pueb: this.CostosForm.get(EstadosKeys.PUEBLA)?.value,
        quer: this.CostosForm.get(EstadosKeys.QUERETARO)?.value,
        chih: this.CostosForm.get(EstadosKeys.CHIHUAHA)?.value,
        oaxa: this.CostosForm.get(EstadosKeys.OAXACA)?.value,
        sono: this.CostosForm.get(EstadosKeys.SONORA)?.value,
        slp: this.CostosForm.get(EstadosKeys.SANLUISPOTOSI)?.value,
        sina: this.CostosForm.get(EstadosKeys.SINALOA)?.value,
        guer: this.CostosForm.get(EstadosKeys.GUERRERO)?.value,
        zaca: this.CostosForm.get(EstadosKeys.ZACATECAS)?.value,
        tama: this.CostosForm.get(EstadosKeys.TAMAULIPAS)?.value,
        more: this.CostosForm.get(EstadosKeys.MORELOS)?.value,
        taba: this.CostosForm.get(EstadosKeys.TABASCO)?.value,
        guan: this.CostosForm.get(EstadosKeys.GUANAJUATO)?.value,
        coli: this.CostosForm.get(EstadosKeys.COLIMA)?.value,
        jali: this.CostosForm.get(EstadosKeys.JALISCO)?.value,
        cdmx: this.CostosForm.get(EstadosKeys.CDMX)?.value,
        naya: this.CostosForm.get(EstadosKeys.NAYARIT)?.value,
        camp: this.CostosForm.get(EstadosKeys.CAMPECHE)?.value,
        nl: this.CostosForm.get(EstadosKeys.NUEVOLEON)?.value,
        mex: this.CostosForm.get(EstadosKeys.MEXICO)?.value,
        qroo: this.CostosForm.get(EstadosKeys.QUERETARO)?.value,
        ext: this.CostosForm.get(EstadosKeys.EXTRANJERO)?.value,

      },
      mat: this.CostosForm.get('mat')?.value,
      def: this.CostosForm.get('def')?.value,
      div: this.CostosForm.get('div')?.value,
      cot: this.CostosForm.get('cot')?.value,
      der: this.CostosForm.get('der')?.value,
      nss: this.CostosForm.get('nss')?.value,
      rfc: this.CostosForm.get('rfc')?.value,
      inh: this.CostosForm.get('inh')?.value,
      ret: this.CostosForm.get('ret')?.value,
      sus: this.CostosForm.get('sus')?.value,
      ecu: this.CostosForm.get('ecu')?.value,
      reset: this.CostosForm.get('reset')?.value,
      arfc: this.CostosForm.get('arfc')?.value,
      dnac: this.CostosForm.get('dnac')?.value,
      curp: this.CostosForm.get('curp')?.value,
      cfe: this.CostosForm.get('cfe')?.value,
    };

    let us: UserInfo = {
      username: this.DatosGForm.value?.username,
      password: this.DatosGForm.value?.password,
      rol: this.DatosGForm.value?.rol,
      idSuper: this.DatosGForm.value?.responsable?.id,
      status: this.FinForm.value?.status=='true'?true:false,
      type: this.FinForm.value?.type,
      nombre: this.FinForm.value?.nombre,
      precios: _prices
    };

    this.modal.close(us);
  }

 /** Inicio de formularios */

  initDatosG(): void {
    this.DatosGForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rol:['',Validators.required],
      responsable: [{}, Validators.required]

    });
    if(this.myData?.rol== 'Admin'){
      this.DatosGForm.get('rol')?.setValue("Supervisor");
    }
    else if(this.myData?.rol== 'Supervisor'){
      this.DatosGForm.get('rol')?.setValue("Asesor");
    }
    else if(this.myData?.rol== 'Asesor'){
      this.DatosGForm.get('rol')?.setValue("Cliente");
    }
    else if(this.myData?.rol== 'Cliente'){
      this.DatosGForm.get('rol')?.setValue("Sucursal");
    }
    else if(this.myData?.rol== 'Sucursal'){
      this.DatosGForm.get('rol')?.setValue("Empleado");
    }
  }

  initCostosForm(): void {
    this.CostosForm = this.formBuilder.group({
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
      [this.EstadosKeys.BAJACALIFORNIA]: [this.BAJACALIFORNIA, Validators.required],
      [this.EstadosKeys.YUCATAN]: [this.YUCATAN, Validators.required],
      [this.EstadosKeys.BAJACALIFORNIASUR]: [this.BAJACALIFORNIASUR, Validators.required],
      [this.EstadosKeys.VERACRUZ]: [this.VERACRUZ, Validators.required],
      [this.EstadosKeys.COAHUILA]: [this.COAHUILA, Validators.required],
      [this.EstadosKeys.MICHOACAN]: [this.MICHOACAN, Validators.required],
      [this.EstadosKeys.TLAXCALA]: [this.TLAXCALA, Validators.required],
      [this.EstadosKeys.DURANGO]: [this.DURANGO, Validators.required],
      [this.EstadosKeys.AGUASCALIENTES]: [this.AGUASCALIENTES, Validators.required],
      [this.EstadosKeys.CHIAPAS]: [this.CHIAPAS, Validators.required],
      [this.EstadosKeys.HIDALGO]: [this.HIDALGO, Validators.required],
      [this.EstadosKeys.PUEBLA]: [this.PUEBLA, Validators.required],
      [this.EstadosKeys.QUERETARO]: [this.QUERETARO, Validators.required],
      [this.EstadosKeys.CHIHUAHA]: [this.CHIHUAHA, Validators.required],
      [this.EstadosKeys.OAXACA]: [this.OAXACA, Validators.required],
      [this.EstadosKeys.SONORA]: [this.SONORA, Validators.required],
      [this.EstadosKeys.SANLUISPOTOSI]: [this.SANLUISPOTOSI, Validators.required],
      [this.EstadosKeys.SINALOA]: [this.SINALOA, Validators.required],
      [this.EstadosKeys.GUERRERO]: [this.GUERRERO, Validators.required],
      [this.EstadosKeys.ZACATECAS]: [this.ZACATECAS, Validators.required],
      [this.EstadosKeys.TAMAULIPAS]: [this.TAMAULIPAS, Validators.required],
      [this.EstadosKeys.MORELOS]: [this.MORELOS, Validators.required],
      [this.EstadosKeys.TABASCO]: [this.TABASCO, Validators.required],
      [this.EstadosKeys.GUANAJUATO]: [this.GUANAJUATO, Validators.required],
      [this.EstadosKeys.COLIMA]: [this.COLIMA, Validators.required],
      [this.EstadosKeys.JALISCO]: [this.JALISCO, Validators.required],
      [this.EstadosKeys.CDMX]: [this.CDMX, Validators.required],
      [this.EstadosKeys.NAYARIT]: [this.NAYARIT, Validators.required],
      [this.EstadosKeys.CAMPECHE]: [this.CAMPECHE, Validators.required],
      [this.EstadosKeys.NUEVOLEON]: [this.NUEVOLEON, Validators.required],
      [this.EstadosKeys.MEXICO]: [this.MEXICO, Validators.required],
      [this.EstadosKeys.QUINTANAROO]: [this.QUINTANAROO, Validators.required],
      [this.EstadosKeys.EXTRANJERO]: [this.EXTRANJERO, Validators.required]
    })
  }

  initFinForm(): void {
    this.FinForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      type: ['', Validators.required],
      status: [ 'true',Validators.required]
    });
  }

  /**  */
  AutoPassGen(): void {
    let _password = this.utils.WordGen(10);
    this.DatosGForm.get("password")?.setValue(_password);
    
      if(this.TimeToView != 0) this.CountDown.countdown.unsubscribe();
      this.CountDown.startTimer(10);
      this.CountDown.getTimer().subscribe((data:any) => {
          this.TimeToView = data;
      });
  }

}
