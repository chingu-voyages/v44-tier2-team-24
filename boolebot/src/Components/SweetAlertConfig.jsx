import Swal from 'sweetalert2';

const sweetAlertMixin = Swal.mixin({
    width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(https://sweetalert2.github.io/#iconsimages/trees.png)',
});

export default sweetAlertMixin;