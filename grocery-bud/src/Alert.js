import React, { useEffect } from "react";

const Alert = ({ alert, showAlert }) => {
  useEffect(() => {
    const clearAlert = setTimeout(() => {
      showAlert();
    }, 2000);
    return () => clearTimeout(clearAlert);
  }, [alert]);
  return (
    alert.status && (
      <article
        className={
          alert.type === "danger" ? "alert alert-danger" : "alert alert-success"
        }
      >
        {alert.msg}
      </article>
    )
  );
};

export default Alert;
