
export async function requestMarkdown(name) {
  const req = () => import(`!!raw-loader!../md/${name}.md`);
  return new Promise((resolve, reject)=>{
    req().then(res=>{
      resolve(res.default);
    }).catch(()=>{
      reject('');
    })
  })
}