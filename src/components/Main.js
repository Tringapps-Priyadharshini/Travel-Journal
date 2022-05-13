import data from "./data";
import Display from "./Display";
export default function Main() {
  return data.map((singleData) => {
    return <Display key={data.id} data={singleData} />;
  });
}
