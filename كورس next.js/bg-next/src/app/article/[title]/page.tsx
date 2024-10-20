export default function Dynamic(prop: any) {
  console.log(prop);
  return (
    <div>
      a<p>{prop.params.title}</p>
    </div>
  );
}
