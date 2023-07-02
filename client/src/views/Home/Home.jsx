import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExample } from "../../redux/actions";

export default function Home() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getExample())
  },[dispatch])

  return (
    <div>
      ESTOY EN HOME
    </div>
  );
}
