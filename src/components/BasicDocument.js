import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from "@react-pdf/renderer";
import LighthouseImage from "../photos/lighthouse.jpg";

  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      width:"100%",
      orientation:"portrait",
      backgroundSize: "cover",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    parentDiv: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: "black",
        position: "absolute",
        left: 0,
        right: 0,
        top: 30,
        // bottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    }
  });


  
  // Create Document Component
  function BasicDocument() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page} object-fit="fill">
          <View style={styles.parentDiv}>
            <Image
                    style={styles.image}
                    src={LighthouseImage}
                /> 
            <Text style={styles.text}>TEXT OVER IMAGE</Text>
          </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;