import React from "react";
import style from "./login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../apicall/usersApi";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Must be 8 characters or more ")
        .required("Fill Password !"),

      email: Yup.string()
        .email("Invalid email address !")
        .required("Fill Email Address !"),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));

      // try {
      //   console.log(values);
      // } catch (err) {
      //   console.log(err);
      // }
      try {
        const response = await loginUser(values);
        if (response.success) {
          localStorage.setItem("token", response.data);
          window.location.href = "/";
        } else {
          console.log(response.message);
          // message.error(response.message);
        }
      } catch (error) {
        // dispatch(HideLoading());
        console.log(error.message);
        // message.error(error.message);
      }
      formik.resetForm();
    },
  });
  return (
    <>
      <section className={style.login_page}>
        <div className={style.loginPage_contanier}>
          <div className={style.login_two_side}>
            <div className={style.login_left_side}>
              <h1 className={style.login_page_h1}>Codemedia</h1>
              <h3 className={style.login_page_h3}>
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
                      value={formik.values.email}
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
                  <button type="submit" className={style.button_login}>
                    Log in
                  </button>
                </form>

                <a href="#" className={style.forget_link}>
                  Forgotten password?
                </a>
                <hr />

                <Link to={"/register"}>
                  <button className={style.new_account_button}>
                    Create new account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Login;
