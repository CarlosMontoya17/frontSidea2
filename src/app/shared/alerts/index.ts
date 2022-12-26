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