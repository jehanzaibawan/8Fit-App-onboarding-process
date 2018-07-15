import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroudImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    },
    logo: {
        position: 'absolute',
        top: 22,
        maxHeight: 44,
        alignSelf: 'center'
    },
    welcomeText: {
        fontFamily: 'Fira Sans',
        fontSize: 12,
        color: '#000000',
        alignSelf: 'center',
        marginTop: 80
    },
    leftBeansImage: {
        position: 'absolute',
        maxWidth: 186,
        maxHeight: 533,
        left: 0
    },
    rightDumbbellImage: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        maxWidth: 117,
        maxHeight: 280
    },
    goalsContainer: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    goalWrapper: {
        marginTop: 20,
        backgroundColor: '#f2f0f0',
        maxHeight: 100,
        minHeight: 100,
        borderRadius: 5,
        justifyContent: 'center'
    },
    goalWrapperBorderFix: {
        backgroundColor: '#fff',
        maxHeight: 98,
        minHeight: 98,
        marginLeft: 1,
        marginRight: 1,
        borderRadius: 5,
        justifyContent: 'center'
    },
    goalsHeading: {
        fontFamily: 'Fira Sans',
        fontSize: 20,
        color: '#000000',
        marginLeft: 30
    },
    goalsDescription: {
        fontFamily: 'Fira Sans Light',
        fontSize: 16,
        color: '#000000',
        marginLeft: 30
    },
    chevronRight: {
        position: 'absolute',
        top: 40,
        right: 10,
        maxWidth: 10,
        maxHeight: 20
    },
    boxShadown: {
        width: '100%',
        height: 9
    },
    stageIndicator: {
        flex: 1,
        borderBottomWidth: 5,
        borderBottomColor: '#08da8a',
        maxHeight: 5,
        alignSelf: 'flex-start'
    },
    stage1: {
        width: '68%'
    },
    stage2: {
        width: '100%'
    },
    heading: {
        fontFamily: 'Fira Sans',
        fontSize: 24,
        color: '#000000',
        marginTop: 26,
        alignSelf: 'center'
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 80
    },
    textBoxContainerSingle: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    textBoxContainerDouble: {
        width: '50%',
        paddingLeft: 20,
        paddingRight: 20
    },
    textBox: {
        fontFamily: 'Fira Sans',
        fontSize: 32,
        color: '#000000',
        textAlign: 'center',
        borderBottomWidth: 2.5,
        borderBottomColor: '#bebebe'
    },
    inlineText: {
        position: 'absolute',
        right: '32%',
        top: '45%',
        fontFamily: 'Fira Sans Light',
        fontSize: 14
    },
    alert: {
        fontFamily: 'Fira Sans Light',
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    alertError: {
        backgroundColor: '#ff0000',
    },
    alertWarning: {
        backgroundColor: '#f9c700',
    },
    continueButton: {
        position: 'absolute',
        bottom: 20,
        borderRadius: 30,
        paddingTop: 12,
        paddingBottom: 12,
        width: '45%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueButtonActive: {
        backgroundColor: '#292c2f',
    },
    continueButtonInActive: {
        backgroundColor: '#a9abac',
    },
    buttonTitle: {
        fontFamily: 'Fira Sans',
        fontSize: 16
    },
    buttonTitleActive: {
        color: '#ebecec'
    },
    buttonTitleInActive: {
        color: '#f6f7f7'
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    toggleButtonLeft: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        width: '30%',
        backgroundColor: '#818385',
        alignItems: 'center'
    },
    toggleButtonRight: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        width: '30%',
        backgroundColor: '#818385',
        alignItems: 'center'
    },
    toggleTitleLeft: {
        fontFamily: 'Fira Sans',
        fontSize: 12,
        width: '99%',
        textAlign: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 1,
        marginBottom: 1,
        marginLeft: 1
    },
    toggleTitleRight: {
        fontFamily: 'Fira Sans',
        fontSize: 12,
        width: '99%',
        textAlign: 'center',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 1,
        marginBottom: 1,
        marginRight: 1
    },
    toggleTitleActive: {
        backgroundColor: '#292c2f',
        color: '#dddede'
    },
    toggleTitleInActive: {
        backgroundColor: '#ffffff',
        color: '#4a4d4f'
    },
    inlineContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    hidden: {
        display: 'none'
    },
    resultText: {
        fontFamily: 'Fira Sans Light',
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 5,
        textAlign: 'center',
        color: '#000000'
    },
    resultValue: {
        fontFamily: 'Fira Sans',
        fontSize: 22,
        color: '#000000'
    }
});