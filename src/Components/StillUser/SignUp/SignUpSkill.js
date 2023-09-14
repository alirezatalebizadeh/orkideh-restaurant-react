import React from 'react'
import './SignUpSkill.css'



export default function SignUpSkill() {
    return (
        <div className='signUpSkill'>
            <h4 className='title'>اگر حس میکنی مهارتی داری که میتونیم روی همکاریت حساب کنیم ...
                فرم زیر رو پر کن
            </h4>

            <div classNameNameName='container'>

                <div className="wrapper">
                    <div className="inner">
                        <form action="">
                            <h3>فرم ثبت اطلاعات </h3>

                            <div className="form-wrapper">
                                <label for="">نام خانوادگی </label>
                                <input type="text" className="form-control" />
                            </div>


                            <div className="form-wrapper">
                                <label for="">نام </label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-wrapper">
                                <label for="">ایمیل</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-wrapper">
                                <label for="">مهارت  </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-wrapper">
                                <label for="">  مدت سابقه کار</label>
                                <input type="text" className="form-control" />
                            </div>

                            <button>ثبت نام</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
