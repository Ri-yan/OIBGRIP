import React, { useContext, useEffect, useState, createContext } from "react";
import axios from '../api/api'

const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [auth, setauth] = useState({})
    const [adminAuth, setadminAuth] = useState({})
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    function addToCart(pizza){
        setCart(cart => ( [...cart, pizza]))
    }
    function deleteCartItem(id){
        const temp=[...cart];
        const index=temp.findIndex(item=>item.id===id)
        if(index<0) return;
        temp.splice(index,1);
        setCart(temp);
      }
      const userLogin=async(email,password)=>{
        axios.post("/signin",{
          email:email,
          password:password,
          role:'user'
        })
        .then(res=>{console.log(res.data);setauth(res.data);localStorage.setItem("auth", JSON.stringify(res.data));})
        .catch(err=>console.log(err.message))
      }
      const userSignup=async(user)=>{
        axios.post("/signup",{
          username:user.username,
          email:user.email,
          password:user.password,
          role:'user'
        })
        .then(res=>{console.log(res.data);setauth(res.data);localStorage.setItem("auth", JSON.stringify(res.data));})
        .catch(err=>console.log(err.message))
      }
      const logout=()=>{
        setauth({});
        localStorage.setItem("auth", JSON.stringify({}))
      }
      const placeOrder=async(cart)=>{
        try {
          cart.forEach(async(i) => {
            await axios.post("/addorder",{
            orderer_id:i.orderer_id,
            reciever_name :i.reciever_name,
            address :"256/9 lucknow",
            ordername :i.name,
            preview :i.preview,
            size :i.size ,
            quantity :i.quantity,
            status :"ordered",
            price :i.variableprice,
            veggis:i.vegis.name,
            base: i.base.name,
            cheese: i.cheese.name,
            sause:i.sause.name
            })
            .then(res=>{console.log(res.data)})
            .catch(err=>console.log(err.message))
          });
           
        } catch (error) {
          console.log(error.message)
        }
      }


      const adminLogin=async(email,password)=>{
        axios.post("/admin/signin",{
          email:email,
          password:password,
          role:'user'
        })
        .then(res=>{console.log(res.data);setadminAuth(res.data);localStorage.setItem("admin-auth", JSON.stringify(res.data));})
        .catch(err=>console.log(err.message))
      }
      const adminLogOut=()=>{
        setadminAuth({});
        localStorage.setItem("admin-auth", JSON.stringify({}))
      }



  useEffect(() => {
    const unsubscribe =() => {
      setauth(JSON.parse(localStorage.getItem("auth")) || {})
      setadminAuth(JSON.parse(localStorage.getItem("admin-auth")) || {})
    };
    return unsubscribe;
  }, []);

const value = {setCart,addToCart,cart,deleteCartItem,orders, setOrders,userLogin,userSignup,
  auth,logout,adminAuth, setadminAuth,adminLogin,adminLogOut,placeOrder};
  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};
export function useApp() {
  return useContext(AppContext);
}
