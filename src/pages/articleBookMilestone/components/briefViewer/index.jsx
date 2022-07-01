import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { api } from "../../../../services/api";

import Modal from "../../../../components/Modal/modal";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function BriefViewer({
  setModalBrief,
  modalBrief,
  file,
  fileName,
  file64,
  mimeType,
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const currentURL = import.meta.env.VITE_URL_SERVICE;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleDownload = async (filePath) => {
    await api.get(`/file/get?path=${filePath}`).then((response) => {
      const a = document.createElement("a"); // Create <a>
      a.href = `data:application/octet-stream;base64,${response.data.content}`; // File Base64 Goes here
      a.download = response.data.file_name; // File name Here
      a.click(); // Downloaded file
    });
  };

  return (
    <Modal
      displayModal={modalBrief}
      closeModal={() => setModalBrief(false)}
      title="Project Manager Brief"
      content={
        <>
          {mimeType.includes("pdf") ? (
            <div className="pdf-viewer">
              <Document
                file={`data:application/pdf;base64,${file64}`}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <a
                href="#"
                className="btn-float-dwn"
                onClick={() => handleDownload(file)}
              >
                <button type="button" className="btn btn-outline-primary">
                  Download File
                </button>
              </a>
            </div>
          ) : (
            <p>This file isn't available for viewing</p>
          )}
        </>
      }
      button1Text="Close"
      handleButton1Modal={() => setModalBrief(false)}
    />
  );
}
