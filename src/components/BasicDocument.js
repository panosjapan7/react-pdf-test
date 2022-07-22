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
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    parentDiv: {
        position: "relative",
        objectFit: "cover",
        alignItems: "center", // Makes its children be at the center
    },
    imageDiv: {
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // overflow: "hidden",
      // width: "100%",
      // height: "auto",
    },
    image: {
        // width: "100%",
        // height: "100%",
        // margin: 0,
        // padding: 0,
        // objectFit: "cover",
        // flexShrink: 0,
        minWidth: "100%", // Makes image take up the entire page
        minHeight: "100%", // Makes image take up the entire page
    
    },
    horizontalLineTop: {
      // color: "red",
      position: "absolute",
      // left: 0,
      // right: 0,
      top: 35,
      // bottom: 0,
      // marginLeft: "10%",
      // marginRight: "auto",
      textAlign: "center",

      width: "500px",
      borderBottom: "3px",
      borderBottomColor: "white",
      borderBottomStyle: "solid",
      borderBottomWidth: "3px",
    },
    horizontalLineBottom: {
      position: "absolute",
      bottom: 35,
      textAlign: "center",

      width: "500px",
      borderBottom: "3px",
      borderBottomColor: "white",
      borderBottomStyle: "solid",
      borderBottomWidth: "3px",
    },
    companyTextTop: {
        color: "white",
        position: "absolute",
        top: 70,

        fontSize: "14px",
        fontFamily: "Helvetica",
        letterSpacing: "3px",
    },
    headlineText: {
      color: "white",
      position: "absolute",
      textAlign: "center",
      top: 350,

      fontSize: "40px",
      letterSpacing: "5px",
      fontFamily: "Helvetica-Bold", // fontWeight doesn't work unless you register a font that supports various weights (check documentation)
    },
    smallHeadlineText: {
      color: "white",
      position: "absolute",
      textAlign: "center",
      top: 410,

      fontSize: "11.5px",
      letterSpacing: "5px",
      fontFamily: "Helvetica-Bold", // fontWeight doesn't work unless you register a font that supports various weights (check documentation)
    },
    bottomInfoDiv: {
      bottom: 50,
      position: "absolute",
      
      display: "flex",
      flexDirection: "row", // Without this, it gives 'direction: column' as default
      // alignContent: "space-between", // This doesn't work and I don't know why
      justifyContent: "space-around", // This doesn't work and I don't know why

      paddingLeft: "90px",
      paddingRight: "90px",
      width: "100%", // If I don't give a width, then the justifyContent doesn't work
    },
      bottomInfo: {
        color: "white",
        fontSize: "10px",
        letterSpacing: "1px",
        fontFamily: "Helvetica",
      },
  });
  


  
  // Create Document Component
  function BasicDocument() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page} object-fit="fill">

            {/* Container Div */}
            <View style={styles.parentDiv}>
              
              {/* Image */}
              <View style={styles.imageDiv}>
                <Image
                        style={styles.image}
                        // src="https://images.unsplash.com/photo-1615839476209-46309694d733"
                        src="https://images.unsplash.com/photo-1615839476209-46309694d733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80"
                    /> 
              </View>
              
              {/* Top Horizontal Line */}
              <View style={styles.horizontalLineTop}></View>
              
              {/* Company Text at Top */}
              <Text style={styles.companyTextTop}>FÖRETAG</Text>
              
              {/* Center Text */}
              <Text style={styles.headlineText}>ÅRSTID ÅR</Text>
              <Text style={styles.smallHeadlineText}>VÄLMÅENDEINDEX ANALYS</Text>
              
              {/* Bottom Text */}
              <View style={styles.bottomInfoDiv}>
                <Text style={styles.bottomInfo}>www.dearchange.se</Text>
                <Text style={styles.bottomInfo}>info@dearchange.se</Text>
                <Text style={styles.bottomInfo}>Dagens datum</Text>
              </View >

              {/* Bottom Horizontal Line */}
              <View style={styles.horizontalLineBottom}></View>
            
            </View> 
            {/* End of Container Div */}

          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;