
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Touchable,
} from 'react-native';
import { Provider, observer, inject } from "mobx-react";
import * as commonStyles from '../styles';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import Button from '../components/Button';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import { DoctorStore } from '../store/DoctorStore';
interface ICreateScreenProps {
    navigation: any,
    doctors: DoctorStore
}

interface ICreateScreenState {
    specialty: string,
    image: string,
    name: string,

}

@inject('doctors')
@observer
class CreateScreen extends React.Component<ICreateScreenProps, ICreateScreenState> {

    constructor(props: ICreateScreenProps) {
        super(props);
        this.state = {
            specialty: '',
            image: '',
            name: '',
        };
    }

    public onInputValueChange = (value: string): void => {
        this.setState({ specialty: value })
    }

    public processResponse = (
        response: any,
    ): { uri?: string; error?: string } => {
        if (response.didCancel) {
            return { error: 'canceled' };
        } else if (response.errorCode) {
            return { error: response.errorCode };
        } else {
            return {
                uri: response.uri,
            };
        }
    };

    getImageFromLibrary = (): Promise<object> =>
        new Promise(resolve =>
            ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response =>
                resolve(this.processResponse(response))
            )
        );

    public uploadImage = async () => {
        let image: { uri?: string; error?: string } = await this.getImageFromLibrary();
        if (image.uri) {
            this.setState({ image: image.uri });
        }
    }

    public clearPhoto = (): void => {
        this.setState({ image: '' });
    }

    public handleNameChange = (value: string): void => {
        this.setState({ name: value })
    }

    public addDoctor = (): void => {
        const { name, image, specialty } = this.state;
        if (name.length > 0 && image.length > 0 && specialty.length > 0) {
            this.props.doctors.addDoctor(name, specialty, image);
            this.props.navigation.goBack();
        }
    }

    render() {
        const { navigation } = this.props;
        const { name, image, specialty } = this.state;
        const elements = this.state.image.split('-');
        let imageName = elements[elements.length - 1];
        const active = name.length > 0 && image.length > 0 && specialty.length > 0;
        return (
            <View style={commonStyles.container.screen}>
                <TouchableBounce onPress={() => navigation.goBack()}>
                    <Image source={require('../components/arrow.png')}></Image>
                </TouchableBounce>
                <Button
                    onPress={this.uploadImage}
                    text="Добавить фотографию"
                    buttonColor='#0B54A6'
                />
                {!!imageName?.length && (
                    <View style={{ height: 55, flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20, alignItems: 'baseline' }}>
                        <Text style={[commonStyles.text.inputTitle, { marginRight: 'auto' }]}>{imageName}</Text>
                        <TouchableBounce onPress={this.clearPhoto}>
                            <Text style={{ marginLeft: 'auto', fontSize: 25, color: '#F36E20' }}>Х</Text>
                        </TouchableBounce>
                    </View>
                )}
                <View style={commonStyles.container.input}>
                    <Text style={commonStyles.text.inputTitle}>
                        Имя
                    </Text>
                    <TextInput
                        style={commonStyles.text.inputText}
                        placeholder="Введите имя"
                        placeholderTextColor='#575757'
                        onChangeText={this.handleNameChange}
                    >

                    </TextInput>
                </View>
                <View style={commonStyles.container.input}>
                    <Text style={commonStyles.text.inputTitle}>
                        Должность
                    </Text>
                    <Picker
                        style={[commonStyles.text.inputText, { color: this.state.specialty.length > 0 ? 'black' : '#575757' }]}
                        selectedValue={this.state.specialty}
                        onValueChange={this.onInputValueChange}

                    >
                        <Picker.Item label='Введите должность' value='' />
                        <Picker.Item label="Терапевт" value='Терапевт' />
                        <Picker.Item label="Хирург" value='Хирург' />
                        <Picker.Item label="Офтальмолог" value="Офтальмолог" />
                    </Picker>
                </View>
                <Button
                    onPress={this.addDoctor}
                    style={{ marginTop: 'auto' }}
                    buttonColor={!active ? 'grey' : null}
                />
            </View >
        )
    }
};


export default CreateScreen;
