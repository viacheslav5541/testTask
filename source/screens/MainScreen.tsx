
import React, { Component, ReactElement } from 'react';
import * as commonStyles from '../styles';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    CameraRoll,
    FlatList,
} from 'react-native';
import Card from '../components/Card';
import { observer, inject } from 'mobx-react/native';
import { DoctorStore } from '../store/DoctorStore';
import { Doctor } from '../store/DoctorStore';
import Button from '../components/Button';

interface IMainScreenProps {
    doctors: DoctorStore;
    navigation: any;
}


@inject('doctors')
@observer
class MainScreen extends React.Component<IMainScreenProps> {
    constructor(props: IMainScreenProps) {
        super(props);
    }

    public renderScreenBody = (): ReactElement => {
        const listItem = ({ item }: { item: Doctor }): ReactElement => {
            return (
                <Card {...item} />
            )
        }
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.doctors.doctorsList}
                renderItem={listItem}
                scrollEnabled={true}
            />
        )
    }

    public render() {
        const { navigation } = this.props;
        return (
            <View style={commonStyles.container.screen}>
                <Text style={commonStyles.text.title}>Наши врачи</Text>
                {this.renderScreenBody()}
                <Button
                    onPress={() => navigation.push('CreateScreen')}
                    text={'Добавить врача'}
                    iconUrl={require('../components/plus_icon.png')}
                />
            </View>
        );
    }
}

export default MainScreen;
