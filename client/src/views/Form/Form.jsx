import { useSelector } from "react-redux"

export default function Form() {
  const example = useSelector(state => state.example)
  console.log(example)
    return (
      <div>
        {example.map((e)=>{
          return <h1 key={e.identification}>{e.name}</h1>
        })}
      </div>
    )
  }
  