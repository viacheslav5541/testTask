import { StyleSheet } from 'react-native';

export const container = StyleSheet.create({
    screen: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 30,
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    card: {
        height: 160,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#DFDFDF',
        borderBottomWidth: 1,
    },
    image: {
        width: 80,
        height: 120,
    },
    cardText: {
        padding: 20
    },
    button: {
        borderRadius: 4,
        width: '100%',
        height: 55,
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#B5BBBD',
        marginTop: 30
    }
});

export const text = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#333333',
        fontWeight: '700',
        alignSelf: 'center',
        lineHeight: 28.8
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24
    },
    specialty: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24
    },
    button: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        alignSelf: 'center',
    },
    inputTitle: {
        marginBottom: 20,
        fontSize: 16,
        fontWeight: '400',
        color: '#575757'
    },
    inputText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black'
    }
});
