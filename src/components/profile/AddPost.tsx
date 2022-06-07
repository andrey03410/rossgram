import React, {useEffect, useState} from 'react';
import cross from "../../images/cross-button.svg"
import {AddPostAPI} from "../../api/AddPost";


const AddPost = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    function refreshPage() {
        window.location.reload();
    }

    let ChoosePhotoClasses = 'upload-photo-button-wrapper';
    let PublishPhotoClasses = 'hidden';

    if(selectedFile){
        ChoosePhotoClasses = 'hidden'
        PublishPhotoClasses = 'publish-photo-button-wrapper'
    }

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        // @ts-ignore
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    // @ts-ignore
    const onSelectImage = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isLoading) return
        setIsLoading(true)
        // @ts-ignore
        const objectUrl = URL.createObjectURL(selectedFile)
        AddPostAPI.AddPOST(objectUrl)
            .then(response => {
                if (response.status == 200) {
                    setIsDone(true)
                } else {
                    return response.json()
                }
            })
        setIsLoading(false)
    }

    return (
        <form onSubmit={submit}>
            <div className={'add-post-wrapper'}>
                <div className={'add-post-panel'}>
                    <img src={cross} alt={"X"} className={"cross-button"} onClick={refreshPage}/>

                    <div className={"add-post-panel-inner"}>
                        <div className={"add-post-text"}>
                            <span>Новый пост</span>
                        </div>
                        <div className="upload-photo-container">
                            <input className={"hidden"} id="input-image" type='file'
                                   onChange={onSelectImage}/>
                            {selectedFile && <img className={"input-image-preview"} src={preview}/>}
                        </div>

                        <div className={ChoosePhotoClasses}>
                            <label className={"upload-photo-button"} htmlFor="input-image">Выбрать фото</label>
                        </div>
                        <div className={PublishPhotoClasses}>
                            <input className={"publish-photo-button"} type="submit" value="Опубликовать"/>
                            <input className={"publish-reset-button"} type="reset" value="Назад" onClick={onSelectImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddPost;