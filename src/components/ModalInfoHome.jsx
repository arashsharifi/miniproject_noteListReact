import Modal from "react-bootstrap/Modal";

function ModalInfoHome(props) {
  return (
    <Modal
      className="bg-secondery"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Made by</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Designed by-arash</p>
        <p>app version-1.0.0</p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
export default ModalInfoHome;
