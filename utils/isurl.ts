export default (unknownUrl: string|URL): boolean=>{
  try{
    new URL(unknownUrl);
    return true;
  }catch(err){
    if(err instanceof TypeError)
      return false;
    throw err;
  }
}