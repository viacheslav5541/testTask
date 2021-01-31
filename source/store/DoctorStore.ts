import { observable, runInAction, action, toJS, reaction } from 'mobx';
import { AsyncStorage } from 'react-native';

export type Doctor = {
    name: string;
    specialty: string,
    photoUrl: string
};

export interface IDoctorStore {
    doctorsList: Doctor[];
    uploadDoctors: () => void;
}

export class DoctorStore implements IDoctorStore {
    @observable
    public doctorsList = [];
    constructor() {
        this.uploadDoctors()
    }


    @action
    uploadDoctors() {
        AsyncStorage.getItem('doctors')
            .then((doctors) => {
                if (doctors) {
                    this.doctorsList = JSON.parse(doctors)
                }
            })
    }

    @action
    addDoctor(name: string, specialty: string, image: string): Promise<void> {
        this.doctorsList = this.doctorsList.concat({ name, specialty, photoUrl: image })
        return AsyncStorage.setItem('doctors', JSON.stringify(this.doctorsList))
    }

}

export default new DoctorStore();
