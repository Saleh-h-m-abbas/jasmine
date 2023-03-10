import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "green",
    padding: theme.spacing(4),
    marginTop: "40px",
    margin: "auto",
    width: "100%",
    borderRadius: "25px",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
  },
  line: {
    borderBottom: "1px solid white",
    margin: "10px 0",
  },
  title: {
    color: "white",
    direction: "rtl",
    marginBottom: theme.spacing(2),
  },
  inputField: {
    marginBottom: theme.spacing(2),
    backgroundColor: "white",
    direction: "rtl",
  },
  addButton: {
    backgroundColor: "#e00303",
    color: "white",
    marginTop: theme.spacing(2),
  },
}));

const AddCustomer = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [usersList, setUsersList] = useState([]);

  const getSales = async () => {
    const userArray = [];
    const q = query(collection(db, "users"), where("role", "==", 2));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userArray.push({ id: doc.data().uid, name: doc.get("username") });
    });
    setUsersList(userArray);
  };
  useEffect(() => {
    getSales();
  }, []);
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>اضافة زبون</h2>
      <div className={classes.line}></div>
      <Formik
        initialValues={{ username: "", country: "", village: '',address:'',phoneNumber:'' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "يرجى تعبئة اسم زبون";
          }
          if (!values.country) {
            errors.country = "يرجى تعبئة اسم الدوله";
          }
          if (!values.village) {
            errors.village = "يرجى تعبئة اسم القريه ";
          }
          if (!values.address) {
            errors.address = "يرجى تعبئة العنوان";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "يرجى ادخال رقم الهاتف";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const addCustomer = await addDoc(collection(db, "customers"), {
            createdAt: serverTimestamp(),
            name: values.username,
            sales_manager_id: values.country,
            sales_manager_name: usersList.find(
              (e) => e.id === values.country
            ).name,
            user_create: user.username,
            village: values.village,
          });
          values.username = "";
          values.country = "";
          values.village = '';
          values.address = '';
          values.phoneNumber = '';
          setSubmitting(true);
          await setDoc(
            doc(db, "customers", addCustomer.id),
            {
              uid: addCustomer.id,
            },
            { merge: true }
          );
        }}
      >
        {({ touched, errors}) => (
          <Form>
            <Field
              name="username"
              as={TextField}
              label="اسم الزبون"
              className={classes.inputField}
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.username ? errors.username : ""}
              error={touched.username && Boolean(errors.username)}
              fullWidth
            />

            <Field
              name="country"
              as={TextField}
              label="الدوله"
              className={classes.inputField}
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.country ? errors.country : ""}
              error={touched.country && Boolean(errors.country)}
              fullWidth
            />

            <Field
              name="village"
              as={TextField}
              label="القريه"
              className={classes.inputField}
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.village ? errors.village : ""}
              error={touched.village && Boolean(errors.village)}
              fullWidth
            />

            <Field
              name="address"
              as={TextField}
              label="العنوان"
              className={classes.inputField}
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.address ? errors.address : ""}
              error={touched.address && Boolean(errors.address)}
              fullWidth
            />

            <Field
              name="phonenumber"
              as={TextField}
              type="number"
              label="رقم الهاتف"
              className={classes.inputField}
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.phoneNumber ? errors.phoneNumber : ""}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              fullWidth
            />
            

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.addButton}
            >
              اضافة
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCustomer;
