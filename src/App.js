import { PDFDownloadLink, ReactPDF, PDFViewer } from "@react-pdf/renderer";
import BasicDocument from "./components/BasicDocument";

function App() {
  // <PDFViewer>
  //   <PDFFile />
  // </PDFViewer>
  return (
    <div >
        <BasicDocument /> 
      {/* // <PDFDownloadLink document={<PDFFile />} fileName="FORM">
        
      //   <button>Download</button>
      // </PDFDownloadLink>
      // <PDFFile /> */}

    </div>
  );
}

export default App;


/* {({loading}) => 
          loading ? (
            <button>Loading Document...</button> 
            )  : (
              <button>Download</button>
            ) 
        } */