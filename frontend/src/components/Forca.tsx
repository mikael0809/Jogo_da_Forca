export function Forca({erros}:{erros:number}){
 return <svg className="forca" viewBox="0 0 180 170" role="img" aria-label={`${erros} erros`}>
  <path d="M18 154H145M48 154V15H126V34"/>
  {erros>=1&&<circle cx="126" cy="49" r="15"/>}
  {erros>=2&&<path d="M126 64V108"/>}
  {erros>=3&&<path d="M126 76L101 94"/>}
  {erros>=4&&<path d="M126 76L151 94"/>}
  {erros>=5&&<path d="M126 108L105 137"/>}
  {erros>=6&&<path d="M126 108L147 137"/>}
 </svg>;
}
