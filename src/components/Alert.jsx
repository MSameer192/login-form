import React from 'react';

export default function Alert(props) {

  

  return (

            <>
                {
                    <div
                    className="modal fade "
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Form Data
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                        </div>
                        <div className="modal-body"> User Name: {props.name} <br /> User Email: {props.email} <br /> User Password: {props.password}    </div>
                        <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                        </div>
                    </div>
                    </div>
                </div>
            }</>

  );
}
