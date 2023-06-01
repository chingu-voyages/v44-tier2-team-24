import "../SASS/Partials/_sweetAlerts.scss";
import Swal from 'sweetalert2';

const sweetAlertMixin = Swal.mixin({
    width: 600,
  padding: '3em',
  color: '#061d41',
  confirmButtonColor: '#061d41',
  customClass: {
    confirmButton: 'swal2-confirm',
    content: 'my-swal-font-size', // Apply the class to the content area
    header: 'my-swal-header',
  },
  
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