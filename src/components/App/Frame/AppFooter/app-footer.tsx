
const Copyright = () => {

  const copyright = String.fromCodePoint(0x00A9);
  const year = new Date().getFullYear();
  const companyName = 'Guararapes';

  return (
    <span style={{ display: 'block', margin: '2px auto', fontSize:'.85em', width: 'max-content' }}>
      {`${copyright} ${year} ${companyName}`}
    </span>
  );
};

const AppFooter = () => {
 
  return (
    <div style={{ width: '100%', height: '20px', borderTop: "1px solid #e9e9e9"}}>
      <Copyright />
    </div>
  );
}

export default AppFooter;