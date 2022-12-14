import React from "react";

const DeleteModal = ({title,message,closemodal,successAction,modalData}) => {
  return (
    <div>
      {/* The button to open modal */}
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            <label onClick={() => successAction(modalData)}
             htmlFor="confirmation-modal" className="btn btn-primary">
              Delete
            </label>
            <button className="btn btn-outline" onClick={closemodal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
