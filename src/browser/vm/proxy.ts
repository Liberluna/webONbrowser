import ky from "ky";

export type proxyArgs={
  url: string
};
export default async function({ url }: proxyArgs){
  const res = await ky.get('/proxy', {
    searchParams:{
      "url":url
    }
  })
  const data=await res.json();
  return data;
}