import * as yup from 'yup'

export const ValidationLoginSchema = yup.object().shape({
    phone_no: yup.string()
        .required('Required*')
        .test('phone_no', 'Required', (value) => {
            return validateEmail(value) || validatePhone(parseInt(value ?? '0'));
        }),
    password: yup.string()
      .required('Required*'),
})

const validateEmail = (email) => {
    return yup.string().email().isValidSync(email)
};

const validatePhone = (phone) => {
return yup.number().integer().positive().test(
    (phone) => {
        return (phone && phone.toString().length === 10) ? true : false;
    }
    ).isValidSync(phone);
};

export const SignupSchema = yup.object().shape({
    username: yup.string()
        .min(3, 'Too Short!')
        .required('Required*'),
    password: yup.string()
        .required('Required*'),
});

export const CustomerSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Too Short!')
        .required('Required*'),
    phone_no: yup.string()
        .required('Required*'),
        // .test('phone_no', 'phone_no should be 10 digit', (value) =>{
        //     return validatePhone(parseInt(value))
        // }),
    street_1: yup.string()
        .required('Required*'),
    city: yup.string()
        .required('Required*'),
    district: yup.string()
        .required('Required*'),
    state: yup.string()
        .required('Required*'),
    pincode: yup.string()
        .required('Required*')
});

export const MemberSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: yup.string()
        .required('Required'),
    role_id: yup.string()
        .required('Required'),
    phone_no: yup.string()
        .required('Required')
        // .test('phone_no', 'phone_no should be 10 digit', (value) =>{
        //     return validatePhone(parseInt(value))
        // }),
});

export const ValidationEntrySchema = yup.object().shape({
    weight_kg: yup.number()
      .required('*Required'),
    rate_per_kg: yup.number()
      .required('*Required'),
})

export const ProfileSchema = yup.object().shape({
    fullName: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    gender: yup.string()
        .required('Required'),
    fatherName: yup.string()
        .required('Required'),
    motherName: yup.string()
        .required('Required'),
    maritalStatus: yup.string()
        .required('Required'),
    dateOfBirth: yup.string()
        .required('Required'),
    country: yup.string()
        .required('Required'),
    phone_number: yup.string()
        .required('Required')
        .test('phone_no', 'phone_no should be 10 digit', (value) =>{
            return validatePhone(parseInt(value))
        }),
});

export const PostSchema = yup.object().shape({
    fullName: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone_number: yup.string()
        .required('Required')
        .test('phone_no', 'phone_no should be 10 digit', (value) =>{
            return validatePhone(parseInt(value))
        }),
    email: yup.string().email('Invalid email')
        .required('Required*'),
    Address: yup.string()
        .required('Required'),
    Message: yup.string()
        .required('Required'),
    File_Attachment: yup.string()
        .required('Required'),
});