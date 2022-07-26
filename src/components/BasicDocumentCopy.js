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
  

  const stylesTwo = StyleSheet.create({
    page: {
      backgroundColor: "white",
      width:"100%",
      height: "100vh",
      orientation:"portrait",
      backgroundSize: "cover",
      alignItems: "center", // Makes its children be at the center
      position: "relative",
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    pageTwoParentDiv: {
      position: "relative",
      alignItems: "center", // Makes its children be at the center
      marginTop: "40px",
      backgroundColor: "#068466",
      width: "460px",
      height: "110px",
    },
    pageTwoHeadlineText: {
      
      marginTop: "25px",
      color: "white",
      // position: "absolute",
      textAlign: "center",
      // top: 350,

      fontSize: "24px",
      letterSpacing: "5px",
      fontFamily: "Helvetica-Bold", 
    },
    pageTwoHorizontalLine: {

      position: "absolute",
      top: 0,
      bottom: 35,
      // marginLeft: "10%",
      // marginRight: "auto",
      textAlign: "center",

      width: "440px",
      borderBottom: "3px",
      borderBottomColor: "white",
      borderBottomStyle: "solid",
      borderBottomWidth: "2px",
    },
    pageTwoTextParentDiv: {
      display: "flex",
      flexDirection: "row", // Without this, it gives 'direction: column' as default
      justifyContent: "space-between",
      width: "460px",
      position: "relative",
    },
      pageTwoTextColumn: {
        width: "220px",
        position: "relative",
      },
        pageTwoParagraphs: {
          fontSize: "11px",
          fontFamily: "Times-Roman",
          letterSpacing: "1px",
          marginTop: "20px",
          width: "218px",
        },

    pageTwoCircleContainer: {
      position: "relative",
    },
      pageTwoCircleDiv: {
        backgroundColor: "#068466",
        width: "200px",
        height: "200px",

        borderRadius: "50%",
        position: "absolute",
        bottom: 0,
        top: -70,
        left: 130,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },

        pageTwoCircleHeadline: {
          color: "white",
        // position: "absolute",
          textAlign: "center",
        // top: 350,

          fontSize: "40px",
          letterSpacing: "1px",
          fontFamily: "Helvetica-Bold", 
          marginBottom: "0px",
          paddingBottom: "10px",
        },
        pageTwoCircleText: {
          fontSize: "17px",
          letterSpacing: "0px",
          fontFamily: "Helvetica", 
          color: "white",
        },

    pageTwoImageContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "77vh",
        marginTop: "180px",
        position: "relative",
    },
      pageTwoImageText: {
          fontSize: "27px",
          letterSpacing: "1px",
          fontFamily: "Helvetica", 
          color: "white",
          lineHeight: "1.1px",
          position: "absolute",
          top: 100,
          left: 50,
          width: "140px",
          textAlign: "center",
      },
      pageTwoImage: {
        zIndex: 1,
      }

  })
  
  // Create Document Component
  function BasicDocument() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
            
          {/*Page One*/}
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
          
          {/*Page Two*/}
          <Page size="A4" style={stylesTwo.page} object-fit="fill">
            <View style={stylesTwo.pageTwoParentDiv}>
              <Text style={stylesTwo.pageTwoHeadlineText}>ANALYS ÅRSTID ÅR</Text>

              <View style={stylesTwo.pageTwoHorizontalLine}></View>
            </View>

            <View style={stylesTwo.pageTwoTextParentDiv}>
              <View style={stylesTwo.pageTwoTextColumn}>
                <Text style={stylesTwo.pageTwoParagraphs}>Ert välmåendeindex i den här mätningen är XX. Snittet för våra företagskunder är 6,6.</Text>
                <Text style={stylesTwo.pageTwoParagraphs}>Personlig utveckling har ett index på XX. XX procent av medarbetarna upplever att de är mycket engagerade, motiverade, inspirerade och tycker om att lära sig nya saker. X av 10 uppger dock en viss bristande motivation där de framförallt upplever att det är svårt att förändra eller påverka sina omständigheter.</Text>
                <Text style={stylesTwo.pageTwoParagraphs}>Fysisk aktivitet ligger på XX. XX procent uppger att de rör sig på en hälsosam nivå. XX procent är så inaktiva att det finns risk för den fysiska och psykiska hälsan.</Text>
              </View>

              <View style={stylesTwo.pageTwoTextColumn}>
                <Text style={stylesTwo.pageTwoParagraphs}>Stressnivån ligger på XX, XX procent upplever en viss förhöjd stress. Frågor som sticker ut är; XX, XX samt XX.</Text>
              </View>
            </View>
            
            <View style={stylesTwo.pageTwoCircleContainer}>
              <View style={stylesTwo.pageTwoCircleDiv}>
                <Text style={stylesTwo.pageTwoCircleHeadline}>X av 10</Text>
                <Text style={stylesTwo.pageTwoCircleText}>KÄNNER</Text>
                <Text style={stylesTwo.pageTwoCircleText}>MENINGSFULLHET</Text>
              </View>
            </View>  

            <View style={stylesTwo.pageTwoImageContainer}>
              <Image
                style={stylesTwo.pageTwoImage}
                src="https://www.groovypost.com/wp-content/uploads/2018/02/happy-man-laptop-feature.jpg"
              />
              <Text style={stylesTwo.pageTwoImageText}>Mår vi bra, gör vi bra</Text>
            </View>

          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;