import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, Svg, Circle, Rect } from "@react-pdf/renderer";
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

  const stylesThree = StyleSheet.create({
    page: {
      backgroundColor: "white",
      width:"100%",
      height: "100vh",
      orientation:"portrait",
      backgroundSize: "cover",
      
      // Makes its children be at the center
      // alignItems: "center", 
      position: "relative",
    },
      pageThreeMainContainer:{
        width: "100%",
        height: "100%",
        
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        position: "relative",
        paddingLeft: "40px",
        paddingRight: "40px",
        
        // border: "5px",
        // borderColor: "red",
        // borderStyle: "solid",
        // borderWidth: "3px",
      },
        pageThreeHorizontalLine: {
          // position: "absolute",
          // top: 35,
          textAlign: "center",
          marginTop: "35px",

          width: "500px",
          borderBottom: "3px",
          borderBottomColor: "#068466",
          borderBottomStyle: "solid",
          borderBottomWidth: "3px",
        },
        pageThreeAgeTextParentContainer: {
          marginTop: "20px",
        },
          pageThreeAgeTextStatistic: {
            fontSize: "10px",
            fontFamily: "Times-Bold",
            letterSpacing: "1px",

            marginBottom: "30px",
          },
          pageThreeAgeTextHeadline: {
            marginBottom: "5px",
            fontFamily: "Helvetica", 
            fontSize: "12px",
          },
          pageThreeAgeText: {
            fontSize: "12px",
            fontFamily: "Times-Roman",
            marginTop: "10px",
            marginBottom: "30px",
          },
          pageAgeRange: {
            marginBottom: "4px",
            fontFamily: "Helvetica", 
            fontSize: "11px",
            
            marginTop: "0px",
          },
          pageThreeAgeTextLastLineOne: {
            fontSize: "12px",
            fontFamily: "Times-Roman",
            marginTop: "5px",
            marginBottom: "40px",
          },
          pageThreeAgeTextLastLineTwo: {
            fontSize: "12px",
            fontFamily: "Times-Roman",
            marginTop: "5px",
          },
        
        pageThreeChartContainer: {
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
        },
        pageThreeChartTextContainer: {
          display: "flex",
          alignItems: "flex-end",
          marginLeft: "0px",
          textAlign: "left",
        },
          pageThreeChartText: {
            fontFamily: "Helvetica", 
            fontSize: "7px",
            // marginLeft: "20px",
            marginBottom: "13px",
          },
          pageThreeChartTextPersonlig: {
            fontFamily: "Helvetica", 
            fontSize: "7px",
            paddingRight: "8px",
          },
        pageThreeCharts: {
          // paddingLeft: "3px",
          marginLeft: "10px",
        },
          pageThreeSvg: {
            paddingBottom: "0px",
            marginBottom: "0px",
          },

          pageThreeAgeTextParentContainerTwo: {
            marginTop: "-120px",
            marginBottom: "30px",
          },
      
        pageThreeThreeCirclesContainer: {
          marginBottom: "20px",
          height: "320px",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
          pageThreeCircle: {
            backgroundColor: "#068466",
            width: "150px",
            height: "150px",

            borderRadius: "50%",
            bottom: 70,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        pageThreeCircleHeadline: {
          fontSize: "27px",
          fontFamily: "Helvetica-Bold",
          color: "white",
          marginBottom: "5px",
        },
        pageThreeCircleText: {
          fontSize: "10px",
          fontFamily: "Helvetica",
          color: "white",
          width: "120px",
          textAlign: "center",
          lineHeight: "1.2px",
        },
        pageThreeCircleTextSecond: {
          fontSize: "10px",
          fontFamily: "Helvetica",
          color: "white",
          width: "150px",
          textAlign: "center",
          lineHeight: "1px",
          marginTop: "1.5px",
          marginRight: "0px",
          marginLeft: "0px",
        },
  })

  const stylesFour = StyleSheet.create({
    page: {
      backgroundColor: "white",
      width:"100%",
      height: "100vh",
      orientation:"portrait",
      backgroundSize: "cover",
      position: "relative",
    },
    pageFourMainContainer:{
      width: "100%",
      height: "100%",
      
      display: "flex",
      flexDirection: "column",
      position: "relative",
      paddingLeft: "40px",
      paddingRight: "40px",
      
      // border: "5px",
      // borderColor: "red",
      // borderStyle: "solid",
      // borderWidth: "3px",
    },
      pageFourHorizontalLine: {
        textAlign: "center",
        marginTop: "35px",

        width: "500px",
        borderBottom: "3px",
        borderBottomColor: "#068466",
        borderBottomStyle: "solid",
        borderBottomWidth: "3px",
      },

      // Text CSS
      pageFourAgeTextParentContainer: {
        marginTop: "20px",
      },
        pageFourStatistic: {
          fontSize: "10px",
          fontFamily: "Times-Bold",
          letterSpacing: "1px",

          marginBottom: "30px",
        },
        pageFourPositionHeadline: {
          marginBottom: "4px",
          fontFamily: "Helvetica", 
          fontSize: "12px",
        },
        pageFourText: {
          fontSize: "12px",
          fontFamily: "Times-Roman",
          marginTop: "0px",
        },
        pageFourBreakOne: {
          marginTop: "15px",
          marginBottom: "15px",
        },
        pageFourEmployeeName: {
          marginBottom: "2px",
          fontFamily: "Helvetica", 
          fontSize: "11px",
        },
        pageFourBreakTwo: {
          marginTop: "10px",
          marginBottom: "10px",
        },
        pageAgeRange: {
          marginBottom: "4px",
          fontFamily: "Helvetica", 
          fontSize: "11px",
          
          marginTop: "0px",
        },

      // Chart Test
      lightGreenChart: {
        marginTop: "50px",
        backgroundColor: "rgb(216, 244, 229)",
        width: "500px",
        height: "20px",
      },
      greenChart: {
        backgroundColor: "#41aa88",
        width: "400px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
      },
      textChart: {
        fontSize: "8px",
        color: "white",
        textAlign: "right",
        marginRight: "5px",
      },

      // Chart CSS
      pageFourChartContainer: {
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
      },
      pageFourChartTextContainer: {
        display: "flex",
        alignItems: "flex-end",
        marginLeft: "0px",
        textAlign: "left",
      },
        pageFourChartText: {
          fontFamily: "Helvetica", 
          fontSize: "7px",
          marginBottom: "13px",
        },
        pageFourChartTextPersonlig: {
          fontFamily: "Helvetica", 
          fontSize: "7px",
          paddingRight: "8px",
        },
      pageFourCharts: {
        marginLeft: "10px",
      },

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
          
          {/*Page Three*/}
          <Page size="A4" style={stylesThree.page} object-fit="fill">
            <View style={stylesThree.pageThreeMainContainer}>
              
              {/* Top Horizontal Line */}
              <View style={stylesThree.pageThreeHorizontalLine}></View>

              {/* First Text Paragraph */}
              <View style={stylesThree.pageThreeAgeTextParentContainer}>
                <Text style={stylesThree.pageThreeAgeTextStatistic}>STATISTIK</Text>
                <Text style={stylesThree.pageThreeAgeTextHeadline}>ÅLDER</Text>
                <Text style={stylesThree.pageThreeAgeText}>Här redovisas de ålderspann som har fler än 5 svarande.</Text>
                <Text style={stylesThree.pageAgeRange}>20-39 ÅR</Text>
                <Text style={stylesThree.pageThreeAgeText}>Välmåendeindex ligger på XX. XX procent känner sig mycket engagerade och kreativa. Den största utmaningen för denna åldersgrupp är XX.</Text>

                <Text style={stylesThree.pageThreeAgeTextLastLineOne}>Det som skiljer sig från övriga åldersgrupper är XX.</Text>
              </View>
              {/* End of First Text Paragraph */}

              {/* First Chart */}
              <View style={stylesThree.pageThreeChartContainer}>
                <View style={stylesThree.pageThreeChartTextContainer}>
                  <Text style={stylesThree.pageThreeChartText}>Stresshantering</Text>
                  <Text style={stylesThree.pageThreeChartText}>Fysisk aktivitet</Text>
                  <Text style={stylesThree.pageThreeChartTextPersonlig}>Personlig utveckling</Text>
                </View>
                
                <View style={stylesThree.pageThreeCharts}>
                  
                  <Svg viewBox="0 0 0 0" style={stylesThree.pageThreeSvg}>
                      <Rect
                        x="0"
                        y="0"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="0"
                        width={"150"}
                        height="10"
                        fill="#41aa88"
                      />
                      <Rect
                        x="0"
                        y="20"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="20"
                        width={"100"}
                        height="10"
                        fill="#41aa88"
                      />
                      <Rect
                        x="0"
                        y="40"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="40"
                        width={"50"}
                        height="10"
                        fill="#41aa88"
                      />
                  </Svg>
                </View>

              </View>


              {/* Second Text Paragraph */}
              <View style={stylesThree.pageThreeAgeTextParentContainerTwo}>
                <Text style={stylesThree.pageAgeRange}>40-59 ÅR</Text>
                <Text style={stylesThree.pageThreeAgeText}>Välmåendeindex XX. XX procent upplever livet som mycket meningsfullt.</Text>

                <Text style={stylesThree.pageThreeAgeTextLastLineTwo}>Det som sticker ut i jämförelsen är XX och XX.</Text>
              </View>
              {/* End of Second Text Paragraph */}

              {/* Second Chart */}
              <View style={stylesThree.pageThreeChartContainer}>
                <View style={stylesThree.pageThreeChartTextContainer}>
                  <Text style={stylesThree.pageThreeChartText}>Stresshantering</Text>
                  <Text style={stylesThree.pageThreeChartText}>Fysisk aktivitet</Text>
                  <Text style={stylesThree.pageThreeChartTextPersonlig}>Personlig utveckling</Text>
                </View>
                
                <View style={stylesThree.pageThreeCharts}>
                  
                  <Svg viewBox="0 0 0 0" style={stylesThree.pageThreeSvg}>
                      <Rect
                        x="0"
                        y="0"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="0"
                        width={"150"}
                        height="10"
                        fill="#41aa88"
                      />
                      <Rect
                        x="0"
                        y="20"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="20"
                        width={"100"}
                        height="10"
                        fill="#41aa88"
                      />
                      <Rect
                        x="0"
                        y="40"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="40"
                        width={"50"}
                        height="10"
                        fill="#41aa88"
                      />
                  </Svg>
                </View>

              </View>

              {/* Three Circles */}
              <View style={stylesThree.pageThreeThreeCirclesContainer}>
                <View style={stylesThree.pageThreeCircle}>
                  <Text style={stylesThree.pageThreeCircleHeadline}>48%</Text>
                  <Text style={stylesThree.pageThreeCircleText}>AV 40-59 ÅRINGARNA HAR EN AKTIV LIVSSTIL</Text>
                </View>
                <View style={stylesThree.pageThreeCircle}>
                  <Text style={stylesThree.pageThreeCircleHeadline}>28%</Text>
                  <Text style={stylesThree.pageThreeCircleText}>AV 20-39 ÅRINGARNA</Text>
                  <Text style={stylesThree.pageThreeCircleTextSecond}>KÄNNER MENINGSFULLHET</Text>
                </View>
                <View style={stylesThree.pageThreeCircle}>
                  <Text style={stylesThree.pageThreeCircleHeadline}>48%</Text>
                  <Text style={stylesThree.pageThreeCircleText}>AV 40-59 ÅRINGARNA KÄNNER HARMONI</Text>
                </View>
              </View>
            </View>
            {/* End of pageThreeMainContainer */}
          </Page>

          {/*Page Four*/}
          <Page size="A4" style={stylesFour.page} objectFit="fill">

            {/* pageFourMainContainer */}
            <View style={stylesFour.pageFourMainContainer}>

              {/* Top Horizontal Line */}
              <View style={stylesFour.pageFourHorizontalLine}></View>
              

              {/* Text Block */}
              <View style={stylesFour.pageFourAgeTextParentContainer}>
                
                <Text style={stylesFour.pageFourStatistic}>STATISTIK</Text>
                
                {/* CHEF & Text */}
                <Text style={stylesFour.pageFourPositionHeadline}>CHEF</Text>
                <Text style={stylesFour.pageFourText}>Här redovisas de Chefer som har fler än 5 svarande.</Text>
                
                {/* Adds space between Text elements */}
                <View style={stylesFour.pageFourBreakOne}></View>

                {/* Employee Name & Text */}
                <Text style={stylesFour.pageFourEmployeeName}>ANNIKA JOHANSSON</Text>
                <Text style={stylesFour.pageFourText}>Välmåendeindex ligger på XX.</Text>

                {/* Adds space between Text elements */}
                <View style={stylesFour.pageFourBreakTwo}></View>

                {/* Paragraph 4 */}
                <Text style={stylesFour.pageFourText}>XX procent känner sig mycket motiverade och tycker att arbetet är meningsfullt. Det som skulle kunna förbättras är möjligheten att påverka.</Text>
                
                {/* Adds space between Text elements */}
                <View style={stylesFour.pageFourBreakTwo}></View>
                
                {/* Paragraph 2 */}
                <Text style={stylesFour.pageFourText}>XX procent rör på sig tillräckligt mycket för att må bra. X av 10 upplever att de får tillräckligt med rörelse under arbetsdagen. De frågor som sticker ut är; XX, XX samt XX.</Text>
                
                {/* Adds space between Text elements */}
                <View style={stylesFour.pageFourBreakTwo}></View>
                
                {/* Paragraph 3 */}
                <Text style={stylesFour.pageFourText}>XX procent känner en viss stress och det finns indikationer på att medarbetarna upplever att; XX och XX.</Text>


              </View>
              {/* End of Text Block */}
              
              {/* Chart Test */}
              {/* <View style={stylesFour.lightGreenChart}>
                <View style={stylesFour.greenChart}>
                  <Text style={stylesFour.textChart}>8.5</Text>
                </View>
              </View> */}
              {/* End of Chart Test */}

              {/* Chart Block */}
              <View style={stylesFour.pageFourChartContainer}>
                
                {/* Chart Text Block */}
                <View style={stylesFour.pageFourChartTextContainer}>
                  <Text style={stylesFour.pageFourChartText}>Stresshantering</Text>
                  <Text style={stylesFour.pageFourChartText}>Fysisk aktivitet</Text>
                  <Text style={stylesFour.pageFourChartTextPersonlig}>Personlig utveckling</Text>
                </View>

                {/* Chart */}
                <View style={stylesFour.pageFourCharts}>
                  <Svg viewBox="0 0 0 0">
                      <Rect
                        x="0"
                        y="0"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="0"
                        width={"150"}
                        height="10"
                        fill="#41aa88"
                      />
                      <Rect
                        x="0"
                        y="20"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="20"
                        width={"100"}
                        height="10"
                        fill="#41aa88"
                      />
                      <Rect
                        x="0"
                        y="40"
                        width="250"
                        height="10"
                        fill="#38c976"
                        fillOpacity="0.2"
                      />
                      <Rect
                        x="0"
                        y="40"
                        width={"50"}
                        height="10"
                        fill="#41aa88"
                      />
                  </Svg>
                </View>

              </View>
              {/* End of Chart */}
              


            </View>
            {/* End of pageFourMainContainer */}
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;