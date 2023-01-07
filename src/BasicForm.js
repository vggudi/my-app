import { useFormik } from "formik";
import * as yup from 'yup';
const  formValidationSchema = yup.object( {
    email : yup.string().min(6,'Min 6 Chars').required('Please fill email'),
    password : yup.string().min(8 ,"Min 8 Chars").max(12,"Max 12 chars")
    .required('Please fill password'),
});
export function BasicForm() {
  const formik = useFormik({
   initialValues :{
    email:"",
    password:""
    },
    validationSchema: formValidationSchema,
});
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="email" 
      placeholder='email' 
      value={formik.values.email}
      onChange = {formik.handleChange}
      onBlur={formik.handleBlur}
      name = 'email'
      />
      {formik.touched.email && formik.errors.email ?formik.errors.email : null}
      <input type="text"
       placeholder='password' 
       value={formik.values.password}
       onChange = {formik.handleChange}
       name = 'password'
       onBlur={formik.handleBlur}
       />
      <button type="submit">SUbmit</button>
      {formik.touched.password && formik.errors.password ?formik.errors.password : null}
    </form>
  );
}
