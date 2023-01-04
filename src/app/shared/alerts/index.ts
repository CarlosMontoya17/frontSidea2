import Swal from "sweetalert2";

export function SimpleAlert(icon: any, title: string, text:string): void {
    Swal.fire({
        icon: icon,
        title: title,
        text: text
    }).then(d => {
        if(d.isConfirmed) return true;
        else return false;
    })
}

export function SimpleMixed(icon: any, text:string){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: text
      });
}

export function SimpleLoader() {
  let timerInterval
  Swal.fire({
      title: 'Cargando',
      text: 'Espere porfavor',
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(undefined);
      }
  }).then((result) => {

  });
}

export function CloseAlerts() {
  Swal.close();
}