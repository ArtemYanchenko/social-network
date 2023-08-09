import {PhotosType} from '../bll/profile-reducer';
import {instance, ResponseType} from './api';

export const profileAPI = {
    getProfilePage(id: string) {
        return instance.get(`profile/${id}`)
            .then(res => res.data)
    },
    savePhoto: function (file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<ResponseType<{ photos: PhotosType }>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}