export default (blob:Blob):Promise<string>=>
  new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onload=()=>{
      if(reader.result)
        resolve(reader.result.toString());
    };
    reader.onerror=err=>{
      reject(err);
    }
    reader.readAsDataURL(blob);
  })