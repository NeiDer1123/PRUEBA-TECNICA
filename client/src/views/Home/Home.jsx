import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExample } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";

export default function Home() {
  const example = useSelector((state) => state.example);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExample());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1>ESTOY EN HOME</h1>
    </div>
  );
}
