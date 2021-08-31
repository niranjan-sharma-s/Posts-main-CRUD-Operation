
import swal from "sweetalert";


export const addAlert = () => {

   return  swal("Post Added!", {
    icon: "success",
    timer:2000,
    buttons: ['false'],
})
}

export const editAlert = () => {

    return  swal("Post Edited!", {
     icon: "success",
     timer:2000,
     buttons: ['false'],

 })}
