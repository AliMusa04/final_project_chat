import React from "react";
import style from "./register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Must be 8 characters or more ")
        .required("Fill Password !"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Fill Email Address !"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <section className={style.login_page}>
        <div className={style.loginPage_contanier}>
          <div className={style.login_two_side}>
            <div className={style.login_left_side}>
              <h1>Codemedia</h1>
              <h3>
                Codemedia helps you connect and share with the people in your
                life.
              </h3>
            </div>
            <div className={style.login_right_side}>
              <div className={style.login_right_side_form_top}>
                <form onSubmit={formik.handleSubmit}>
                  <div className={style.input_valid_div}>
                    <input
                      placeholder="Email address"
                      id="email"
                      className={style.input_password}
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className={style.formik_error}>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div className={style.input_valid_div}>
                    <input
                      placeholder="Password"
                      className={style.input_password}
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className={style.formik_error}>
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                </form>
                <button type="submit" className={style.button_login}>
                  Log in
                </button>

                <a href="#" className={style.forget_link}>
                  Forgotten password?
                </a>
                <hr />

                <button className={style.new_account_button}>
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
