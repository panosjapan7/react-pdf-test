import React from "react";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import LighthouseImage from "../photos/lighthouse.jpg";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "black",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "black",
    },
});

const PDFFile = () => {
    <Document>
        <Page size="A4" style={styles.body}>
                <Text style={styles.header} fixed>HELLO</Text>
            {/* <View>
                <Image style={styles.image} src={LighthouseImage}/>
                <Text style={styles.text}>Morbi bibendum tincidunt nisi at congue. Mauris in porta felis, quis tincidunt orci. Etiam dignissim dictum felis eu porta. Ut urna nulla, scelerisque id ante non, varius vehicula dolor. Pellentesque sit amet fermentum justo. Proin scelerisque lobortis tellus et euismod. Donec viverra lacus at eros tempus commodo. Etiam odio purus, faucibus et vulputate ut, venenatis id purus. Quisque nulla tortor, condimentum eu enim eu, porttitor iaculis nulla. Nullam elit elit, viverra ut nibh ut, scelerisque consectetur quam. Donec id libero non ipsum commodo suscipit cursus in dui. Morbi dictum massa sed libero porttitor vestibulum sed dictum purus. Nunc leo tortor, placerat vel accumsan in, scelerisque sit amet dui. Suspendisse gravida tellus sed sollicitudin dictum. Nulla diam nunc, finibus non ligula ut, facilisis ultrices risus.</Text>
                <Text 
                    style={styles.pageNumber} 
                    render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}
                    fixed
                />
            </View> */}
        </Page>
    </Document>
};

export default PDFFile;