import swal from "sweetalert";
import { deletePostSuccessfulAction } from "../../store/actions/actionCreators";
import { IPost } from "../../store/reducers/getUser";

export const deleteAlert = async(props : IPost) => {

return swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this post!",
    icon: "warning",
    buttons: ["Yes, delete it!","cancel"],
    dangerMode: false,
  })
  .then((willDelete:any) => {
    if (willDelete) {
      return 
      }
     else {
        deletePostSuccessfulAction(props)
        swal("Post has been deleted!", {
            icon: "success",
            timer:2000,
            buttons: ['false'],
  })
}})
}