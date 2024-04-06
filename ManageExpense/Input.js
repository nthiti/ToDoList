import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../src/constants/styles";

const Input = ({label, textInputConfig, style}) => {
    const inputStyles = [styles.input];
    textInputConfig && textInputConfig.multiline
        ? inputStyles.push(styles.inputMultiline)
        : null;

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary700,
        marginBottom: 4,
    },
    input: {
        backgriundColor: GlobalStyles.colors.primary500,
        color: 'black',
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },  
})

export default Input;