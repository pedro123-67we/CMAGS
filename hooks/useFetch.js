import axios from "axios";
import Swal from "react-native-sweet-alert";

const Requests = {
    DAILY_FORM_REQUEST: "http://127.0.0.1:8000/api/v1/medical-daily-form",
    RED_EVAT_REQUEST: "http://127.0.0.1:8000/api/v1/red-evat",
    PATIENT_REQUEST: "http://127.0.0.1:8000/api/v1/patient",
    RECORD_REQUEST: "http://127.0.0.1:8000/api/v1/record",
    DOCTOR_REQUEST: "http://127.0.0.1:8000/api/v1/doctor",
    NURSE_REQUEST: "http://192.168.100.111:8000/api/v1/nurse",
    QA_REQUEST: "http://127.0.0.1:8000/api/v1/qa",
    RESIDENT_REQUEST: "http://127.0.0.1:8000/api/v1/resident",
    LOGIN_REQUEST: "http://127.0.0.1:8000/api/v1/login",
};
const useFetch = () => {
    const loginRequest = async (data) => {
    try {
        const result = await axios.post(Requests.LOGIN_REQUEST, {
        ...data,
    });
    console.log(result);
        Swal.fire("Good job!", "Te has loggeado!", "success");
        } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.msg,
        });
        }
    };
    return { loginRequest };
};
export default useFetch;