import Swal from "sweetalert2";

export function SimpleAlert(icon: any, title: string): void {
    Swal.fire({
        icon: icon,
        title: title
    }).then(d => {
        if(d.isConfirmed) return true;
        else return false;
    })
}