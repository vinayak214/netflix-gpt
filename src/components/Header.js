import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { LOGO, PROFILE_ICON, SUPPORTED_LANGUAGES } from "../utils/constants.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe will be called when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-44" src={LOGO} alt="Netflix-Logo"></img>
      {user && (
        <div className="flex p-4 gap-4">
          <select
            className="px-4 rounded-sm items-center bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleGptSearchClick}
            className="bg-purple-700 text-white rounded-lg p-2 font-bold px-4"
          >
            GPT Search
          </button>
          <img
            className="w-12 h-12"
            src={PROFILE_ICON}
            alt="Profile-Icon"
          ></img>
          <button
            onClick={() => {
              handleSignOut();
            }}
            className="font-bold text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
