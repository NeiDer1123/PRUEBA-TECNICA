import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExample } from "../../redux/actions";

export default function Home() {
  const example = useSelector(state => state.example)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExample());
  }, [dispatch]);

  return (
    <div>
      {example.map((e) => {
        return <h1 key={e.identification}>{e.name}</h1>;
      })}
    </div>
  );
}
