import "../SASS/Partials/_sweetAlerts.scss";
import Swal from 'sweetalert2';

const sweetAlertMixin = Swal.mixin({
    width: 600,
  padding: '2em',
  color: '#061d41',
  confirmButtonColor: '#061d41',
  customClass: {
    confirmButton: 'swal2-confirm',
    content: 'my-swal-font-size', // Apply the class to the content area
    header: 'my-swal-header',
  },
  
});

export default sweetAlertMixin;