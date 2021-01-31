
import React, { ReactElement } from 'react';
import * as commonStyles from '../styles';
import {
    View,
    Text,
    Image
} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';


interface IButtonProps {
    buttonColor?: string
    text?: string
    textStyle?: object,
    onPress: () => void,
    iconUrl?: string,
    style?: object
}


const Button: React.StatelessComponent<IButtonProps> = ({
    buttonColor,
    text,
    textStyle,
    onPress,
    iconUrl,
    style
}) => {
    return (
        <TouchableBounce
            onPress={onPress}
            accessible={true}
            style={[commonStyles.container.button, { backgroundColor: buttonColor ? buttonColor : '#F36E20' }, style && style]}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                <View style={{ marginLeft: iconUrl ? 'auto' : null }}>
                    <Text style={[commonStyles.text.button, textStyle, { marginLeft: iconUrl ? 34 : null }]}>{text ? text : 'Добавить'}</Text>
                </View>
                {iconUrl && (
                    <View style={{ marginLeft: 'auto', width: 14, height: 14, marginRight: 20, }}>
                        <Image
                            style={{ width: 14, height: 14 }}
                            source={iconUrl}
                        />
                    </View>
                )}
            </View>

        </TouchableBounce>
    );
};

export default Button;
