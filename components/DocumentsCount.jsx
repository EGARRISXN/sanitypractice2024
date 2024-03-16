export const query = `count(*[_type == "page"])`;

export default function DocumentsCount({data}) {
  return <div>There are {data} documents</div>;
}
