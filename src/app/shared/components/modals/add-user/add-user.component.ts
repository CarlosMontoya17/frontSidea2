import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { myInfo, UserInfo } from 'src/app/core/models/auth.model';

import { Roles } from 'src/app/core/models/roles.model';
import { EstadosKeys } from 'src/app/features/models/prices.model';
import { UtilsService } from 'src/app/features/services/utils.service';
import { DefaultPrices } from 'src/app/shared/models/default-prices.model';
import { CountdownService } from 'src/app/shared/services/countdown.service';
import { SelectProviderComponent } from '../select-provider/select-provider.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true },
  }]
})
export class AddUserComponent implements OnInit {

    TimeToView: number = 0;
    myData!:myInfo;

    /** Enums */
    EstadosKeys = EstadosKeys;
    Roles = Roles;

    /** FormGroups */
    ProfileData!: FormGroup;
    PricesData!: FormGroup;
    MetaData!: FormGroup;
    Provider: any;
    Unit: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private modal: MatDialogRef<AddUserComponent>,
    private dialog: MatDialog,
    private utils: UtilsService,
    private Countdown: CountdownService
  ) {
    this.modal.disableClose = true;
   }

  async ngOnInit(): Promise<void> {
    if(this.myData){
      this.Provider = this.myData;
      this.myData.rol = this.utils.RolKey2Str(Number(this.myData.rol));
      let _prices: DefaultPrices = await this.utils.DefaultPrices(this.myData.username);    
      if(_prices){
        this.initProfile();
        this.initPrices(_prices);
        this.initMetadata();        
      }
    }
  }

  selectProvider(): void {
    const _dialog = this.dialog.open(SelectProviderComponent, {width: 'md'});
    _dialog.componentInstance.Rol = this.ProfileData.get('rol')?.value;

    
    _dialog.afterClosed().subscribe((data:any) => {
      if(data){
        this.Provider = data;
        this.ProfileData.get('provider')?.setValue(data);
      }
    });
  }

    AutoPassGen(): void {
      let _password = this.utils.WordGen(10);
      this.ProfileData.get("password")?.setValue(_password);
      
        if(this.TimeToView != 0) this.Countdown.countdown.unsubscribe();
        this.Countdown.startTimer(10);
        this.Countdown.getTimer().subscribe((data:any) => {
            this.TimeToView = data;
        });
    }
  


  Create(): void {

    let _prices: DefaultPrices = {
      nac: this.Unit? this.PricesData.get('nac')?.value: {
        agua: this.PricesData.get('agua')?.value,
        bcn: this.PricesData.get('bcn')?.value,
        bcs: this.PricesData.get('bcs')?.value,
        camp: this.PricesData.get('camp')?.value,
        cdmx: this.PricesData.get('cdmx')?.value,
        chia: this.PricesData.get('chia')?.value,
        chih: this.PricesData.get('chih')?.value,
        coah: this.PricesData.get('coah')?.value,
        coli: this.PricesData.get('coli')?.value,
        dura: this.PricesData.get('dura')?.value,
        ext: this.PricesData.get('ext')?.value,
        guan: this.PricesData.get('guan')?.value,
        guer: this.PricesData.get('guer')?.value,
        hida: this.PricesData.get('hida')?.value,
        jali: this.PricesData.get('jali')?.value,
        mex: this.PricesData.get('mex')?.value,
        mich: this.PricesData.get('mich')?.value,
        more: this.PricesData.get('more')?.value,
        naya: this.PricesData.get('naya')?.value,
        nl: this.PricesData.get('nl')?.value,
        oaxa: this.PricesData.get('oaxa')?.value,
        pueb: this.PricesData.get('pueb')?.value,
        qroo: this.PricesData.get('qroo')?.value,
        quer: this.PricesData.get('quer')?.value,
        sina: this.PricesData.get('sina')?.value,
        slp: this.PricesData.get('slp')?.value,
        sono: this.PricesData.get('sono')?.value,
        taba: this.PricesData.get('taba')?.value,
        tama: this.PricesData.get('tama')?.value,
        tlax: this.PricesData.get('tlax')?.value,
        vera: this.PricesData.get('vera')?.value,
        yuca: this.PricesData.get('yuca')?.value,
        zaca: this.PricesData.get('zaca')?.value,
      },
      arfc: this.PricesData.get('arfc')?.value,
      cfe: this.PricesData.get('cfe')?.value,
      cot: this.PricesData.get('cot')?.value,
      curp: this.PricesData.get('curp')?.value,
      def: this.PricesData.get('def')?.value,
      der: this.PricesData.get('der')?.value,
      div: this.PricesData.get('div')?.value,
      dnac: this.PricesData.get('dnac')?.value,
      ecu: this.PricesData.get('ecu')?.value,
      inh: this.PricesData.get('inh')?.value,
      mat: this.PricesData.get('mat')?.value,
      nss: this.PricesData.get('nss')?.value,
      reset: this.PricesData.get('reset')?.value,
      ret: this.PricesData.get('ret')?.value,
      rfc: this.PricesData.get('rfc')?.value,
      sus: this.PricesData.get('sus')?.value
    };

    let _new: UserInfo = {
      username: this.ProfileData.get('username')?.value,
      idSuper: this.ProfileData.get('provider')?.value.id,
      password: this.ProfileData.get('password')?.value,
      rol: this.ProfileData.get('rol')?.value,
      nombre: this.MetaData.get('nombre')?.value,
      type: this.MetaData.get('type')?.value,
      status: Boolean(this.MetaData.get('status')?.value),
      precios: _prices
    };

    this.modal.close(_new);    
  }


  SwitchUnit(): void {
    this.Unit = !this.Unit;    
    if(this.Unit){
      this.PricesData.get('nac')?.enable();
    }
    else this.PricesData.get('nac')?.disable();
  }

  /** Init Forms */
  initProfile(): void {
    let _rol;
    if(this.myData?.rol== 'Admin'){
      _rol = "Supervisor";
    }
    else if(this.myData?.rol== 'Supervisor'){
      _rol = "Asesor";
    }
    else if(this.myData?.rol== 'Asesor'){
      _rol = "Cliente";
    }
    else if(this.myData?.rol== 'Cliente'){
      _rol = "Sucursal";
    }
    else if(this.myData?.rol== 'Sucursal'){
      _rol = "Empleado";
    }
    
    this.ProfileData = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rol:[_rol, Validators.required],
      provider: [this.myData, Validators.required]
    });
  }

  initPrices(prices: DefaultPrices): void {
    typeof(prices.nac)=="number"? this.Unit==true:this.Unit==false;

    this.PricesData = this.formBuilder.group({
      nac: [{value: typeof(prices.nac)=="number"? prices.nac: 0, disabled:typeof(prices.nac)=="number"? false: true}, Validators.required],
      mat: [prices.mat, Validators.required],
      def: [prices.def, Validators.required],
      div: [prices.div, Validators.required],
      cot: [prices.cot, Validators.required],
      der: [prices.der, Validators.required],
      nss: [prices.nss, Validators.required],
      rfc: [prices.rfc, Validators.required],
      inh: [prices.inh, Validators.required],
      ret: [prices.ret, Validators.required],
      sus: [prices.sus, Validators.required],
      ecu: [prices.ecu, Validators.required],
      reset: [prices.reset, Validators.required],
      arfc: [prices.arfc, Validators.required],
      dnac: [prices.dnac, Validators.required],
      curp: [prices.curp, Validators.required],
      cfe: [prices.cfe, Validators.required],
      [this.EstadosKeys.BAJACALIFORNIA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.BAJACALIFORNIA]: 0, Validators.required],
      [this.EstadosKeys.YUCATAN]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.YUCATAN]: 0, Validators.required],
      [this.EstadosKeys.BAJACALIFORNIASUR]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.BAJACALIFORNIASUR]: 0, Validators.required],
      [this.EstadosKeys.VERACRUZ]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.VERACRUZ]: 0, Validators.required],
      [this.EstadosKeys.COAHUILA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.COAHUILA]: 0, Validators.required],
      [this.EstadosKeys.MICHOACAN]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.MICHOACAN]: 0, Validators.required],
      [this.EstadosKeys.TLAXCALA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.TLAXCALA]: 0, Validators.required],
      [this.EstadosKeys.DURANGO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.DURANGO]: 0, Validators.required],
      [this.EstadosKeys.AGUASCALIENTES]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.AGUASCALIENTES]: 0, Validators.required],
      [this.EstadosKeys.CHIAPAS]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.CHIAPAS]: 0, Validators.required],
      [this.EstadosKeys.HIDALGO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.HIDALGO]: 0, Validators.required],
      [this.EstadosKeys.PUEBLA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.PUEBLA]: 0, Validators.required],
      [this.EstadosKeys.QUERETARO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.QUERETARO]: 0, Validators.required],
      [this.EstadosKeys.CHIHUAHA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.CHIHUAHA]: 0, Validators.required],
      [this.EstadosKeys.OAXACA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.OAXACA]: 0, Validators.required],
      [this.EstadosKeys.SONORA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.SONORA]: 0, Validators.required],
      [this.EstadosKeys.SANLUISPOTOSI]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.SANLUISPOTOSI]: 0, Validators.required],
      [this.EstadosKeys.SINALOA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.SINALOA]: 0, Validators.required],
      [this.EstadosKeys.GUERRERO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.GUERRERO]: 0, Validators.required],
      [this.EstadosKeys.ZACATECAS]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.ZACATECAS]: 0, Validators.required],
      [this.EstadosKeys.TAMAULIPAS]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.TAMAULIPAS]: 0, Validators.required],
      [this.EstadosKeys.MORELOS]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.MORELOS]: 0, Validators.required],
      [this.EstadosKeys.TABASCO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.TABASCO]: 0, Validators.required],
      [this.EstadosKeys.GUANAJUATO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.GUANAJUATO]: 0, Validators.required],
      [this.EstadosKeys.COLIMA]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.COLIMA]: 0, Validators.required],
      [this.EstadosKeys.JALISCO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.JALISCO]: 0, Validators.required],
      [this.EstadosKeys.CDMX]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.CDMX]: 0, Validators.required],
      [this.EstadosKeys.NAYARIT]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.NAYARIT]: 0, Validators.required],
      [this.EstadosKeys.CAMPECHE]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.CAMPECHE]: 0, Validators.required],
      [this.EstadosKeys.NUEVOLEON]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.NUEVOLEON]: 0, Validators.required],
      [this.EstadosKeys.MEXICO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.MEXICO]: 0, Validators.required],
      [this.EstadosKeys.QUINTANAROO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.QUINTANAROO]: 0, Validators.required],
      [this.EstadosKeys.EXTRANJERO]: [typeof(prices.nac)!="number"? prices.nac[this.EstadosKeys.EXTRANJERO]: 0, Validators.required]
    });
  }

  initMetadata(): void {
    this.MetaData = this.formBuilder.group({
      nombre: ['', Validators.required],
      type: ['', Validators.required],
      status: [ 'true',Validators.required]
    });
  }

}
