import React, { useEffect, useState } from 'react'
import "./Crad.scss"
import axios from 'axios'


const Crud = () => {
    const [posts, setPosts] = useState(null)
    const [reload, setReload] = useState(false)
    const [edit, setEdit] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:3000/user")
            .then(res => setPosts(res.data))
    }, [reload])

    // const handleCreatePost = (e) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.target)
    //     const user = Object.fromEntries(formData)

    //     axios
    //         .post("http://localhost:3000/user", user)
    //         .then(res => {
    //             e.target.reset()
    //             setReload(prev => !prev)
    //         })
    // }
    const handleCreateEdit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData)

        if (edit) {
            axios
                .put(`http://localhost:3000/user/${edit.id}`, user)
                .then(res => {
                    setEdit(null)
                    e.target.reset()
                    setReload(prev => !prev)
                })
        } else {
            axios
                .post("http://localhost:3000/user", user)
                .then(res => {
                    e.target.reset()
                    setReload(prev => !prev)
                })
        }
    }

    const habdelDelete = id => {
        axios
            .delete(`http://localhost:3000/user/${id}`)
            .then(res => {
                setReload(prev => !prev)
            })
    }

    const handleEdit = item => {
        setEdit(item)
    }



    return (
        <>

            <div className='crud__component'>
                <div className='container'>
                    <div className='crud'>
                        <div className='crud__top__content'>
                            <h2 className='crud__component__text'>CRUD</h2>
                            <form className='crud__component__form' onSubmit={handleCreateEdit} action="">

                                <div className='crud__component__form__group'>
                                    <input defaultValue={edit?.name || ""} placeholder='Sizning ismingiz' required className='crud__component__form__input' type="text" name='name' />
                                    <input defaultValue={edit?.fname || ""} placeholder='Sizning familiyangiz' required className='crud__component__form__input' type="text" name='fname' />
                                    <input defaultValue={edit?.age || ""} placeholder='Sizning yoshingiz' required className='crud__component__form__input' type="number" name='age' />
                                </div>
                                <div className='crud__component__form__group'>
                                    <input defaultValue={edit?.gmael || ""} placeholder='Sizning elektron pchtangiz' required className='crud__component__form__input' type="email" name='gmael' />
                                    <input defaultValue={edit?.desc || ""} placeholder='Sizning yashash xududingiz' required className='crud__component__form__input' type="text" name='desc' />
                                    <input defaultValue={edit?.married || ""} placeholder='Turmush qurgansizmi?' required className='crud__component__form__input' type="text" name='married' />
                                </div>
                                <input defaultValue={edit?.img || ""} placeholder='Sizning suratingiz' required className='crud__component__form__input' type="url" name='img' />
                                <button className='crud__component__form__btn'>{edit ? "Save" : "Create"}</button>
                            </form>
                        </div>

                        <div className='crud__component__box'>
                            {
                                posts?.map((item) => (
                                    <div key={item.id} className='crud__component__box__nomsiz'>
                                        <div className='crud__component__box__card'>
                                            <div className='crud__component__box__card__box'>
                                                <img className='crud__component__box__card__box__image' src={item.img} alt="" />
                                            </div>
                                            <div className='text__group'>
                                                <h3 className='crud__component__box__card__group__name'>Ism: <span>{item.name}</span></h3>
                                                <h3 className='crud__component__box__card__group__name'>Yoshi: <span>{item.age}</span></h3>
                                                <h3 className='crud__component__box__card__group__name'>Familiya: <span>{item.fname}</span></h3>
                                                <h3 className='crud__component__box__card__group__name'>Elektron Pochta: <span>{item.gmael}</span></h3>
                                                <h3 className='crud__component__box__card__group__name'>Yashash xududi: <span>{item.desc}</span></h3>
                                                <h3 className='crud__component__box__card__group__name'>Turmush: <span>{item.married}</span></h3>
                                            </div>
                                        </div>
                                        <div className='btn__group'>
                                            <button onClick={() => habdelDelete(item.id)} className='btn__group__delete'>Delete</button>
                                            <button onClick={() => handleEdit(item)} className='btn__group__edit'>Edit</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Crud