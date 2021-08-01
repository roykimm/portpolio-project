import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const serviceID = "service_id";
    const templateID = "template_id";
    const userID = "user_4LZZowsW1aIo4TyzSdE5k";


    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name : data.name,
                phone : data.phone,
                email : data.email,
                subject : data.subject,
                desciption : data.desciption
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully! i will contact you as soon as possible!");
            })
            .catch(err => console.error(`something wend wrong ${err}`));
    }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>하단에 연락정보를 입력 후 contact me 버튼을 클릭해주세요.</p>
                <p>메일 확인 후 연락 드리겠습니다.</p>
                <div className="success-message">{successMessage}</div>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* name input */}
                            <div className="text-center">
                                <input type="text" 
                                    id="name"
                                    className="form-control" 
                                    placeholder="성명을 입력해주세요."
                                    name="name"
                                    autoComplete='new-password'
                                    {...register("name", { required: true , maxLength : 20})}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && "필수입력항목입니다."}
                            </span>
                            <div className="text-center">
                                <input type="text"  
                                    id="phone"
                                    name="phone"
                                    className="form-control" 
                                    placeholder="전화번호를 입력해주세요."
                                    phone="phone"
                                    autoComplete='new-password'
                                    {...register("phone", { required: true })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && "필수입력항목입니다."}
                            </span>
                            <div className="text-center">
                                <input type="email"  
                                    id="email"
                                    name="email"
                                    className="form-control" 
                                    placeholder="이메일을 입력해주세요."
                                    email="email"
                                    autoComplete='new-password'
                                    {...register("email", { required: true })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && "필수입력항목입니다."}
                            </span>
                            <div className="text-center">
                                <input type="text" 
                                    id="subject"
                                    name="subject"
                                    className="form-control" 
                                    placeholder="제목을 입력해주세요."
                                    autoComplete='new-password'
                                    {...register("subject", { required: true })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && "필수입력항목입니다."}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea 
                                    id="description"
                                    name="description"
                                    className="form-control" 
                                    placeholder="내용을 입력해주세요."
                                    description="description"
                                    autoComplete='new-password'
                                    {...register("description", { required: true })}
                                >
                                </textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && "필수입력항목입니다."}
                            </span>
                            <button className="btn btn-outline-danger contact-btn" type="submit">
                                연락하기!
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
