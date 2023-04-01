import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

function Toaster(props) {
  const { showToast, toggleShowToast } = props;
  return (
    <ToastContainer position="middle-end">
      <Toast show={showToast} onClose={toggleShowToast}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Reveco</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>
          El producto ha sido añadido a tu carrito de compras
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toaster;
