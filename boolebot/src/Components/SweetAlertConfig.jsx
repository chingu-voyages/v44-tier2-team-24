import "../SASS/Partials/_sweetalertbutton.scss";
import Swal from 'sweetalert2';

const sweetAlertMixin = Swal.mixin({
    width: 600,
  padding: '3em',
  color: '#061d41',
  background: '#d3f3ee',
  confirmButtonColor: '#061d41',
  customClass: {
    confirmButton: 'swal2-confirm',
  }
});

export default sweetAlertMixin;



/* for having multiple button options
}).then((result) => {
  if (result.isConfirmed) {
    // OK button was clicked
    console.log('OK button clicked');
  } else if (result.isDismissed) {
    // Cancel button was clicked
    console.log('Cancel button clicked');
  }
});
*/