
import React from 'react';
import * as commonStyles from '../styles';
import {
    View,
    Image,
    Text
} from 'react-native';
import { Doctor } from '../store/DoctorStore';



interface ICardProps {
    name: string,
    specialty: string,
    photoUrl: string
}


const Card: React.StatelessComponent<ICardProps> = (doctor: Doctor) => {
    return (
        <View style={commonStyles.container.card}>
            <Image
                style={
                    commonStyles.container.image} source={{
                        uri: doctor.photoUrl,
                    }}
                resizeMode='cover'
            />
            <View style={commonStyles.container.cardText}>
                {doctor.name.split(' ').map(
                    (item, index) => (
                        <Text style={commonStyles.text.name} key={index}>
                            {item}
                        </Text>
                    ))
                }
                <Text>{doctor.specialty}</Text>
            </View>
        </View>
    );
};

export default Card;
