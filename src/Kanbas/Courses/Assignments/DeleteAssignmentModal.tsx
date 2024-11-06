export default function DeleteAssignmentModal({
  deletionFunction,
}: {
  deletionFunction: () => void;
}) {
  return (
    <div
      id="wd-delete-assignment-modal"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Are you sure?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              You're about to permanently delete an assignment. Are you sure?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={deletionFunction}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
