import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content_all: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        // alignItems: 'center',
    },
    products: {
        paddingTop: 50,
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 17,
        color: 'black',
    },
    text_payment: {
        paddingTop: 40,
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 17,
        color: 'black',
    },
    content_product: {
        marginTop: 20,

    },
    content_img: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,

    },
    content_warp: {
        display: 'flex',
        flexDirection: 'row',
    },
    content_hazzelnut: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 14,
    },
    text_hazzel: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,
        color: 'black',
    },
    Idr: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 17,
        color: 'black',
    },
    content_payment: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F47B0A',
        width: 50,
        height: 50,
        borderRadius: 12,
        marginLeft: 10,
    },
    text_card: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 17,
        color: 'black',
        marginLeft: 10,
    },
    content_card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 270,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        width: '100%'
    },
    content_sec: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        width: '88%',
    },
    content_tree: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '88%',
        paddingVertical: 20,
    },
    text_total: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 17,
        color: 'black',
    },
    text_price: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 17,
        color: 'black',
    },
    total: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    image_payment: {
        width:60,
        height:60,
        borderRadius:20,
    }
})

export default styles