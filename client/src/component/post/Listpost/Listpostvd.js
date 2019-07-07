{post.User._id === props.user.user.id ? (
                         
  <div className="deletepost">
    <Button
      color="btn btn-link"
      onClick={toggle2}
      // onClick={deletepost.bind(null, post._id)}
    >
      Delete{" "}
      <i className="fa fa-trash" aria-hidden="true" />
    </Button>
    {/* Delete */}
    <Modal isOpen={isShowing2} toggle={toggle2}>
      <ModalHeader toggle={toggle2}>Delete</ModalHeader>
      <ModalBody>Are you sure</ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={deletepost.bind(null, post._id)}
        >
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={toggle2}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>




) : (
  ""
)}
{post.User._id === props.user.user.id ?    <div className="editpost">
  <Link to={`/EditPost/${post._id}`}>Edit<i className="far fa-edit" /></Link>
</div>:''}
