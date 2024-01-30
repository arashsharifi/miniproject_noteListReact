import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function ModalStudy(props) {
  const { isDelete } = props;

  return (
    <Modal
      className="bg-secondery"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Note
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="w-50 mx-auto d-flex justify-content-around  ">
        <Button variant="danger" onClick={() => isDelete(true)}>
          Delete
        </Button>
        <Button variant="success" onClick={() => isDelete(false)}>
          Keep
        </Button>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
export default ModalStudy;
