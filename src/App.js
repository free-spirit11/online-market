import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { onAuthStateChangedListener, createUserDocumentFromAuthIfDoesNotExist, getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  //dispatching action for setting the user auth
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuthIfDoesNotExist(user);
      }
      const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user);
      dispatch(setCurrentUser(pickedUser)); //dispatch passes the action to every reducer function and depending on the type the corresponding reducer gets triggered
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;



