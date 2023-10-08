import BgImage from "../../components/BgImage/BgImage";
import LoginBg from "../../assets/login-bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { FirebaseAuthContext } from "../../providers/FirebaseAuthProvider";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/firebase.config";
import Footer from "../../components/Footer/Footer";

const Registration = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const { createUserNormal, profilePhotoHandler, googleSignIn, profileNameHandler, user, setLoading, setProfileURL } = useContext(FirebaseAuthContext);


    if (user !== null) {
        navigate("/");
    }

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    const handleChange = (e) => {
        if (e.target.files[0])
            setFile(e.target.files[0]);
    }

    const redirectToHome = () => {
        navigate("/");
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();
        const confirm_password = e.target.confirm_password.value.trim();
        const checked = e.target.checkbox.checked;
        // console.log(name, email, password, confirm_password, checked);

        // reset error
        setErrorMessage("");
        // validation
        if (password.length < 6) {
            setErrorMessage("Password must contains 6 or more characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must contains at least 1 uppercase letter")
            return;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setErrorMessage("Password must contain at least 1 special character")
            return;
        } else if (password !== confirm_password) {
            setErrorMessage("Password and confirm password doesn't match")
            return;
        } else if (checked === false) {
            setErrorMessage("Please accept terms and services");
            return;
        }

        // save image to firebase and store the url on state url
        // start 
        const metadata = {
            contentType: 'image/jpeg'
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setURL(downloadURL)
                    profilePhotoHandler(downloadURL)
                    setProfileURL(downloadURL)

                    createUserNormal(email, password)
                        .then(userCredential => {
                            const user = userCredential.user;

                            // console.log(user);

                            updateProfile(user, {
                                displayName: name,
                                photoURL: downloadURL,
                                reloadUserInfo: {
                                    photoUrl: downloadURL
                                }
                            })


                            profilePhotoHandler(url);
                            profileNameHandler(name);
                            // userHandler(user);

                            // sendEmailVerification(user)
                            //     .then(response => {
                            //         console.log(response);
                            //         // send toast message
                            //         alert("Account Created. Check email for verification.");
                            //     })
                            //     .catch(error => {
                            //         console.log(error.message);
                            //     })

                            console.log("Alhamdulillah, Account created successfully")
                            setLoading(false)
                            navigate("/");

                        })
                        .catch(error => {
                            if (error.code === "auth/email-already-in-use") {
                                setErrorMessage("Email already exists");
                            } else {
                                setErrorMessage(error.code);
                            }
                            setLoading(false)
                        })




                });
            }
        );
        // end


    }

    const handleGoogleSignedIn = () => {
        googleSignIn()
            .then(res => {
                // signed in
            })
            .catch(err => {
                const error = err.code;
                setErrorMessage(error);
            })
    }

    return (
        <div>
            <div className="h-[130vh] w-[100vw] flex items-center justify-center">
                <BgImage isFull={true} image={LoginBg}></BgImage>
                <div className="flex flex-col justify-center items-center bg-[#ffffff] rounded-lg p-8">

                    {/* input form start */}
                    <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Create new account
                        </h4>
                        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Enter your details to register.
                        </p>
                        <form onSubmit={handleRegistration} className="mt-8 mb-2 max-w-screen-lg sm:w-96" autoComplete="off" >
                            <div className="mb-4 flex flex-col gap-6">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                    />
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                    />
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                    />
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        placeholder="Confirm password"
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                    />
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        onChange={handleChange}
                                        type="file"
                                        name="file"
                                        placeholder="Upload profile photo"
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                    />
                                </div>
                            </div>
                            <div className="inline-flex items-center">
                                <label
                                    className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#db332a] checked:bg-[#db332a] checked:before:bg-[#db332a] hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                                <label
                                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                                    htmlFor="checkbox"
                                >
                                    <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                                        I agree the
                                        <Link
                                            to=""
                                            className="font-medium transition-colors hover:text-[#db332a]"
                                        >
                                            &nbsp;Terms and Conditions
                                        </Link>
                                    </p>
                                </label>
                            </div>
                            <input
                                className="mt-6 block w-full select-none rounded-lg bg-[#db332a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                                value="Register"
                            />
                            {
                                errorMessage ? <h2 className="text-center text-red-700 text-sm mt-2">{errorMessage}</h2> : ""
                            }
                            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                <span className="mr-2">Already have an account?</span>
                                <Link
                                    to="/login"
                                    className="font-medium text-[#db332a] transition-colors hover:text-blue-700"
                                >
                                    Login now
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div onClick={handleGoogleSignedIn} className="flex hover:cursor-pointer flex-row items-center justify-center rounded-full border-[1px] p-1 px-5 mt-4 bg-[#9CA3AF95]">
                        <FcGoogle className="text-4xl"></FcGoogle>
                        <span className="ml-3">Sign in with Google</span>
                    </div>
                    {/* input form end */}
                </div>
            </div>
            <div className="mt-[10vh] w-[100vw]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Registration;